import {useForm} from 'antd/lib/form/Form'
import {useCallback, useMemo, useState} from 'react'
import validator from '../classes/validator'
import extractor from '../classes/extractor'
import GlobalOptionsInterface from '../types/global-options'
import Api from '../classes/api'
import {
    createErrorState,
    createInitialState,
    createStartedState,
    createSuccessState,
} from '../../../../common/helpers/create-request-state'
import CostInfoInterface from '../types/models/cost-info'
import CostStateType from '../types/state/cost-state'
import GetPaymentLinkRequestInterface from '../types/requests/get-payment-link'
import PolicyInfoInterface from '../types/models/policy-info'
import PolicyStateType from '../types/state/policy-state'
import PaymentLinkStateType from '../types/state/payment-link-state'
import PaymentLinkInfoInterface from '../types/models/payment-link-info'
import useSteps from '../../../common/hooks/use-steps'
import bonusesSystemUsed from '../helpers/bonuses-system-used'
import {log} from '../../../../common/helpers/console/log'

interface UseControllerArgsInterface {
    globalOptions: GlobalOptionsInterface
}

const costInitState = createInitialState<CostInfoInterface>(),
    policyInitState = createInitialState<PolicyInfoInterface>(),
    paymentLinkInitState = createInitialState<PaymentLinkInfoInterface>()

const useController = ({globalOptions}: UseControllerArgsInterface) => {
    const [form] = useForm(),
        {currentStep, prevStep, nextStep} = useSteps(),
        [cost, setCost] = useState<CostStateType>(costInitState),
        [policy, setPolicy] = useState<PolicyStateType>(policyInitState),
        [paymentLink, setPaymentLink] = useState<PaymentLinkStateType>(
            paymentLinkInitState
        ),
        bonusesSystemIsOn = useMemo(() => bonusesSystemUsed(globalOptions), []),
        /*
            Пересчет стоимости,
            поля должны быть валидны!
         */
        recalculate = useCallback(async () => {
            // Сразу устанавливаем флаг, о начале запроса стоимости
            setCost(createStartedState())
            try {
                // Извлекаем данные для получения стоимости
                const data = extractor.extractDataForGetCost(),
                    result = await Api.getCost(data)
                // Проверяем результат запроса
                if ('errors' in result) throw new Error(result.errors.join())
                setCost(createSuccessState(result))
                return true
            } catch (e) {
                setCost(createErrorState([e.message]))
                console.error(e)
                return false
            }
        }, []),
        /*
            Обработчик перехода с первого на второй шаг
            Параметры поездки -> Наполнение
         */
        fromFirstToSecondStep = useCallback(async e => {
            console.log('fromFirstToSecondStep')
            e.preventDefault()
            const validationStatus = await validator.validateFirstStep()
            if (validationStatus === 'error') return
            // Сразу устанавливаем флаг, о начале запроса стоимости
            setCost(createStartedState())
            const isSuccess = await recalculate()
            if (isSuccess) nextStep()
        }, []),
        /*
            Обработчик перехода со второго на третий шаг
            Наполнение -> Данные и оплата
         */
        fromSecondToThirdStep = useCallback(async e => {
            console.log('fromSecondToThirdStep')
            e.preventDefault()
            const validationStatus = await validator.validateSecondStep()
            if (validationStatus === 'error') return
            const isSuccess = await recalculate()
            if (isSuccess) nextStep()
        }, []),
        /*
            Обработчик перехода с третьего на четвертый шаг
            Данные и оплата -> Проверка телефона
         */
        fromThirdToFourthStep = useCallback(async e => {
            console.log('fromThirdToFourthStep')
            e.preventDefault()
            const validationStatus = await validator.validateThirdStep()
            if (validationStatus === 'error') return
            nextStep()
        }, []),
        /*
            Обработчик перехода с четвертого на пятый шаг
            Проверка телефона -> Оплата
         */
        fromFourthToFifthStep = useCallback(async e => {
            log('fromFourthToFifthStep')
            const validationStatus = await validator.validateFourthStep()
            if (validationStatus === 'error') return

            setPolicy(createStartedState())
            const dataForCreate = extractor.extractDataForCreate()
            log('Извлечены данные для создания полиса ', dataForCreate)
            const creationResult = await Api.createPolicy(dataForCreate)

            if ('errors' in creationResult)
                return setPolicy(createErrorState(creationResult.errors))

            setPolicy(createSuccessState(creationResult))

            setPaymentLink(createStartedState())
            const dataForGetPaymentLink: GetPaymentLinkRequestInterface = {
                    id: creationResult.id,
                    code: dataForCreate.code,
                },
                gettingResult = await Api.getPaymentLink(dataForGetPaymentLink)

            if ('errors' in gettingResult)
                return setPaymentLink(createErrorState(gettingResult.errors))

            if (ENV_IS_DEV) {
                if (confirm('Перейти на оплату?'))
                    window.location.href = gettingResult.data.url
            } else {
                window.location.href = gettingResult.data.url
            }
        }, []),
        handleNextClick = useCallback(
            e => {
                if (currentStep === 0) return fromFirstToSecondStep(e)
                if (currentStep === 1) return fromSecondToThirdStep(e)
                if (currentStep === 2) return fromThirdToFourthStep(e)
                if (currentStep === 3) return fromFourthToFifthStep(e)
            },
            [currentStep]
        )

    validator.setForm(form)
    extractor.setForm(form)
    extractor.setGlobalOptions(globalOptions)
    extractor.setBonusesSystemIsOn(bonusesSystemIsOn)

    return {
        form,
        currentStep,
        cost,
        policy,
        paymentLink,
        prevStep,
        recalculate,
        bonusesSystemIsOn,
        handleNextClick,
    }
}

export default useController
