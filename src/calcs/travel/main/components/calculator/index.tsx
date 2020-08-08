import * as React from 'react'
import {FC, useEffect} from 'react'
import Form from 'antd/lib/form'
import {Row, Col} from 'antd/lib/grid'
import 'antd/lib/grid/style'
import useController from '../../hooks/use-controller'
import Step from '../../../../common/components/step'
import TripParams from '../trip-params'
import Filling from '../filling'
import DataAndPayment from '../data-and-payment'
import INIT_VALUES from '../../constants/init-values'
import Header from '../../../../common/components/header'
import {HEADER_STEPS} from '../../constants'
import GlobalOptionsInterface from '../../types/global-options'
import CheckWrapper from '../../../../common/components/check-wrapper'
import Check from '../check'
import './index.less'
import CheckCost from '../../../../common/components/check-cost'
import ControlBlock from '../control-block'
import PhoneChecker from '../../../../common/components/phone-checker'
import Modal from 'antd/lib/modal'
import 'antd/lib/modal/style'
import notification from 'antd/lib/notification'
import 'antd/lib/notification/style'
import addTestPayment from '../../../../common/helpers/add-test-payment'

interface CalculatorPropsInterface {
    globalOptions: GlobalOptionsInterface
}

// todo - оптимизировать количество модулей

const Calculator: FC<CalculatorPropsInterface> = ({globalOptions}) => {
    const {
            form,
            currentStep,
            cost,
            policy,
            paymentLink,
            prevStep,
            recalculate,
            bonusesSystemIsOn,
            handleNextClick,
        } = useController({globalOptions}),
        nextDisabled =
            cost.requestStatus === 'started' ||
            policy.requestStatus === 'started' ||
            paymentLink.requestStatus === 'started'

    // todo - initial-values некоторых полей, нужно высчитывать при слиянии globalOptions,
    //  например поле daysAmount

    useEffect(() => {
        if (cost.requestStatus === 'error') {
            Modal.error({
                title: 'Ошибка',
                content: <p>{cost.errorMessage}</p>,
            })
        }
    }, [cost])

    useEffect(() => {
        if (policy.requestStatus === 'error') {
            Modal.error({
                title: 'Ошибка создания полиса',
                content: <p>{policy.errorMessage}</p>,
            })
        }
    }, [policy])

    useEffect(() => {
        addTestPayment(globalOptions)
    }, [])

    return (
        <Form
            className={'e-calc'}
            layout={'vertical'}
            form={form}
            name={'main'}
            initialValues={INIT_VALUES}
        >
            <Row gutter={64}>
                <Col sm={24}>
                    <Header
                        currentStep={currentStep}
                        calcSteps={HEADER_STEPS}
                    />
                </Col>
                <Col xs={24} md={14}>
                    <Step hidden={currentStep !== 0}>
                        <TripParams form={form} />
                    </Step>
                    <Step hidden={currentStep !== 1}>
                        <Filling
                            form={form}
                            cost={cost.data === null ? 0 : cost.data.totalRub}
                            globalOptions={globalOptions}
                            onValueChange={recalculate}
                            bonusesSystemIsOn={bonusesSystemIsOn}
                        />
                    </Step>
                    <Step hidden={currentStep !== 2}>
                        <DataAndPayment form={form} />
                    </Step>
                    <Step hidden={currentStep !== 3}>
                        <PhoneChecker
                            stepIsActive={currentStep === 3}
                            form={form}
                            globalOptions={globalOptions}
                        />
                    </Step>
                </Col>
                <Col xs={24} md={8}>
                    <CheckWrapper
                        rootNodeId={globalOptions.rootNodeId}
                        currentStep={currentStep}
                    >
                        <Check cost={cost} />
                        <CheckCost
                            currentStep={currentStep}
                            cost={cost.data === null ? 0 : cost.data.totalRub}
                            defaultCost={'от 68'}
                            loadingCost={cost.requestStatus === 'started'}
                            bonusesSystemIsOn={bonusesSystemIsOn}
                            rootNodeId={globalOptions.rootNodeId}
                            onPrevStepClick={prevStep}
                        />
                    </CheckWrapper>
                </Col>
            </Row>
            <Row gutter={64}>
                <Col sm={24} md={14}>
                    <ControlBlock
                        currentStep={currentStep}
                        onNextClick={handleNextClick}
                        onPrevClick={prevStep}
                        nextDisabled={nextDisabled}
                    />
                </Col>
            </Row>

            {ENV_IS_DEV ? (
                <button
                    onClick={e => {
                        e.preventDefault()
                        // e.stopPropagation()
                        console.log(form.getFieldsValue())
                        console.log(globalOptions)
                    }}
                >
                    Данные
                </button>
            ) : null}
        </Form>
    )
}

export default Calculator
