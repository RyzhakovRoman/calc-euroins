import {FormInstance} from 'antd/lib/form'
import GetCostRequestInterface, {
    RiskInterface,
} from '../types/requests/get-cost'
import GlobalOptionsInterface from '../types/global-options'
import IDS from '../constants/ids'
import {NAME_YM_EUROINS, REQUEST_DATE_FORMAT} from '../../../common/constants'
import PROMOCODES from '../constants/promocodes'
import CreatePolicyRequestInterface from '../types/requests/create-policy'
import getYmClientID from '../../../common/helpers/get-ym-client-id'
import * as moment from 'moment'
import bonusesSystemUsed from '../../../common/helpers/bonusesSystemUsed'

declare const ENV_IS_DEV: boolean

/*
    В функциях этого класса мы не проверяем
    на наличие корректных значений полей,
    это задача валидатора.
    Мы просто берем значения из полей.
 */
class Extractor {
    private form: FormInstance
    private globalOptions: GlobalOptionsInterface
    private bonusesSystemIsOn: boolean

    setForm = form => (this.form = form)
    setGlobalOptions = globalOptions => (this.globalOptions = globalOptions)
    setBonusesSystemIsOn = bonusesSystemIsOn =>
        (this.bonusesSystemIsOn = bonusesSystemIsOn)

    formatRisks = (secondPrograms: {
        [key: string]: number
    }): RiskInterface[] => {
        const risks: RiskInterface[] = []

        for (const name in secondPrograms)
            if (secondPrograms[name] !== undefined)
                risks.push({name, sum: secondPrograms[name]})

        return risks
    }

    extractDataForGetCost = (): GetCostRequestInterface => {
        // log('extractDataForGetCost', this.form.getFieldsValue())
        const {getFieldValue} = this.form,
            {code} = this.globalOptions,
            currency = getFieldValue(IDS.CURRENCY),
            multi = getFieldValue(IDS.MULTI),
            periodStartDate = getFieldValue(IDS.PERIOD_START_DATE),
            periodEndDate = getFieldValue(IDS.PERIOD_END_DATE),
            risks = this.formatRisks(getFieldValue(IDS.SECOND_PROGRAMS)),
            data: GetCostRequestInterface = {
                code,
                beginDate: periodStartDate.format(REQUEST_DATE_FORMAT),
                endDate: multi
                    ? moment(periodStartDate)
                          .add(1, 'y')
                          .format(REQUEST_DATE_FORMAT)
                    : periodEndDate.format(REQUEST_DATE_FORMAT),
                countries: getFieldValue(IDS.COUNTRIES),
                currency: currency === 'РУБ' ? 'RUB' : currency,
                multi,
                persons: getFieldValue(IDS.INSUREDS).map(indured => ({
                    birthday: indured.birthday.format(REQUEST_DATE_FORMAT),
                })),
                sum: getFieldValue(IDS.INSURANCE_SUM),
                totalDays: multi
                    ? getFieldValue(IDS.PERIOD_MULTI)
                    : getFieldValue(IDS.NUMBER_OF_DAYS),
                risks: risks,
                sports: getFieldValue(IDS.SPORTS),
                options: {
                    covid: getFieldValue([IDS.OPTIONS, IDS.COVID]),
                },
            }

        let promo = getFieldValue(IDS.PROMOCODE)
        if (promo) {
            promo = promo.toLowerCase()
            PROMOCODES.some(el => {
                if (promo === el.promocode) return (data.code = el.partnerCode)
            })
        }

        return data
    }

    extractDataForCreate = (): CreatePolicyRequestInterface => {
        const {getFieldValue} = this.form,
            // Извлекаем часть данных, которые требуются для рассчета
            chunkOfData = this.extractDataForGetCost(),
            insureds = getFieldValue(IDS.INSUREDS).map(insured => ({
                lastName: insured[IDS.LAST_NAME],
                firstName: insured[IDS.FIRST_NAME],
                birthday: insured[IDS.BIRTHDAY].format(REQUEST_DATE_FORMAT),
                passportNumber:
                    insured[IDS.PASSPORT_SERIAL] +
                    ' ' +
                    insured[IDS.PASSPORT_NUMBER],
            })),
            options = getFieldValue(IDS.OPTIONS)

        return {
            ...chunkOfData,
            insurer: {
                lastName: getFieldValue(IDS.INSURANT_LAST_NAME),
                firstName: getFieldValue(IDS.INSURANT_FIRST_NAME),
                middleName: getFieldValue(IDS.INSURANT_MIDDLE_NAME),
                address: getFieldValue(IDS.INSURANT_ADDRESS),
                phone: getFieldValue(IDS.INSURANT_PHONE),
                email: getFieldValue(IDS.INSURANT_EMAIL),
                birthday: getFieldValue(IDS.INSURANT_BIRTHDAY).format(
                    REQUEST_DATE_FORMAT
                ),
                passport: {
                    serial: getFieldValue(IDS.INSURANT_PASSPORT_SERIAL),
                    number: getFieldValue(IDS.INSURANT_PASSPORT_NUMBER),
                    issuedDate: getFieldValue(
                        IDS.INSURANT_PASSPORT_DATE_OF_ISSUE
                    ).format(REQUEST_DATE_FORMAT),
                },
            },
            options: {
                ...options,
                ...this.getBonusesData(),
                referrer: document.referrer || undefined,
                ymClientId: getYmClientID(NAME_YM_EUROINS),
            },
            persons: insureds,
            test: this.globalOptions.dinamyc.test,
        }
    }

    getBonusesData() {
        const {globalOptions, form} = this

        if (bonusesSystemUsed(globalOptions)) {
            return {
                clientIsn: globalOptions.clientIsn,
                bonus: form.getFieldValue('bonuses'),
            }
        } else {
            return {}
        }
    }
}

const extractor = new Extractor()

export default extractor
