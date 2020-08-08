import {FormInstance} from 'antd/lib/form'
import IDS from '../constants/ids'

type stringOrNumberType = string | number
type NamePathType = string | stringOrNumberType[]
type NamePathsType = NamePathType[]
type ValidationStatus = 'success' | 'error'

class Validator {
    private form: FormInstance

    setForm = form => {
        this.form = form
    }

    validateFirstStep = async (): Promise<ValidationStatus> => {
        console.log('validateFirstStep')
        const {form} = this

        try {
            const insureds = form.getFieldValue(IDS.INSUREDS),
                birthdays = insureds.map((insured, i) => [
                    IDS.INSUREDS,
                    i,
                    IDS.BIRTHDAY,
                ]),
                ids: NamePathsType = [
                    IDS.COUNTRIES,
                    IDS.PERIOD_START_DATE,
                    IDS.PERIOD_END_DATE,
                    IDS.NUMBER_OF_DAYS,
                    ...birthdays,
                ]

            const values = await form.validateFields(ids)
            console.log('Валидация первого шага успешна. Значения ', values)
            return 'success'
        } catch (e) {
            console.log('Ошибка при валидации первого шага! ', e)
            form.scrollToField(e.errorFields[0].name)
            return 'error'
        }
    }

    validateSecondStep = async (): Promise<ValidationStatus> => {
        const {form} = this

        try {
            const ids: NamePathsType = [IDS.AGREEMENT_WITH_RULES, IDS.PROMOCODE]

            const values = await form.validateFields(ids)
            console.log('Валидация второго шага успешна. Значения ', values)
            return 'success'
        } catch (e) {
            console.log('Ошибка при валидации второго шага! ', e)
            form.scrollToField(e.errorFields[0].name)
            return 'error'
        }
    }

    validateThirdStep = async (): Promise<ValidationStatus> => {
        const {form} = this,
            insureds = form.getFieldValue(IDS.INSUREDS)

        try {
            const ids: NamePathsType = [
                IDS.INSURANT_PHONE,
                IDS.INSURANT_EMAIL,
                IDS.INSURANT_LAST_NAME,
                IDS.INSURANT_FIRST_NAME,
                IDS.INSURANT_MIDDLE_NAME,
                IDS.INSURANT_BIRTHDAY,
                IDS.INSURANT_ADDRESS,
                IDS.INSURANT_PASSPORT_SERIAL,
                IDS.INSURANT_PASSPORT_NUMBER,
                IDS.INSURANT_PASSPORT_DATE_OF_ISSUE,
                IDS.AGREEMENT_WITH_PROTECTION_POLICY,
            ]

            insureds.forEach((insured, i) => {
                ids.push([IDS.INSUREDS, i, IDS.LAST_NAME])
                ids.push([IDS.INSUREDS, i, IDS.FIRST_NAME])
                ids.push([IDS.INSUREDS, i, IDS.PASSPORT_SERIAL])
                ids.push([IDS.INSUREDS, i, IDS.PASSPORT_NUMBER])
            })

            const values = await form.validateFields(ids)
            console.log('Валидация третьего шага успешна. Значения ', values)
            return 'success'
        } catch (e) {
            console.log('Ошибка при валидации третьего шага! ', e)
            form.scrollToField(e.errorFields[0].name)
            return 'error'
        }
    }

    validateFourthStep = async () => {
        const {form} = this

        try {
            const ids: NamePathsType = []

            const values = await form.validateFields(ids)
            console.log('Валидация четвертого шага успешна. Значения ', values)
            return 'success'
        } catch (e) {
            console.log('Ошибка при валидации четвертого шага! ', e)
            form.scrollToField(e.errorFields[0].name)
            return 'error'
        }
    }
}

const validator = new Validator()

export default validator
