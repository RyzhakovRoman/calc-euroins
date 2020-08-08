// import InitValuesInterface from '../types/init-values'
import IDS from './ids'
import * as moment from 'moment'
import {INSURANCE_SUMS} from './index'

let INIT_VALUES: any = {
    [IDS.COUNTRIES]: [],
    [IDS.MULTI]: false,
    [IDS.PERIOD_MULTI]: null,
    [IDS.PERIOD_START_DATE]: null,
    [IDS.PERIOD_END_DATE]: null,
    [IDS.NUMBER_OF_DAYS]: 5,
    // todo - надо внутри калька расчитывать исходя из даты начала и даты окончания

    [IDS.CURRENCY]: 'USD',
    [IDS.INSURANCE_SUM]: INSURANCE_SUMS[0],
    [IDS.SPORTS]: [],

    [IDS.INSUREDS]: [
        {
            [IDS.BIRTHDAY]: null,
            [IDS.LAST_NAME]: '',
            [IDS.FIRST_NAME]: '',
            [IDS.PASSPORT_SERIAL]: '',
            [IDS.PASSPORT_NUMBER]: '',
        },
    ],

    [IDS.OPTIONS]: {
        [IDS.ASSISTANCE]: 'express',
        [IDS.COVID]: false,
    },
    [IDS.PROMOCODE_OR_BONUSES]: 'bonuses',
    [IDS.BONUSES]: 0,
    [IDS.AGREEMENT_WITH_RULES]: false,
    [IDS.AGREEMENT_WITH_PROTECTION_POLICY]: false,
    [IDS.INSURANT]: {
        [IDS.LAST_NAME]: '',
        [IDS.FIRST_NAME]: '',
        [IDS.MIDDLE_NAME]: '',
        [IDS.BIRTHDAY]: null,
        [IDS.ADDRESS]: '',
        [IDS.PASSPORT_SERIAL]: '',
        [IDS.PASSPORT_NUMBER]: '',
    },
    [IDS.INSURED_IS_INSURANT_ID]: null,
}

if (ENV_IS_DEV) {
    INIT_VALUES = {
        ...INIT_VALUES,
        [IDS.COUNTRIES]: [175],
        //     [IDS.MULTI]: false,
        //     [IDS.PERIOD_MULTI]: null,
        [IDS.PERIOD_START_DATE]: moment().add(20, 'days'),
        [IDS.PERIOD_END_DATE]: moment().add(24, 'days'),
        //     [IDS.NUMBER_OF_DAYS]: 5, // todo - надо внутри калька расчитывать исходя из даты начала и даты окончания
        //
        //     [IDS.CURRENCY]: 'USD',
        //     [IDS.INSURANCE_SUM]: INSURANCE_SUMS[0],
        //     [IDS.SPORTS]: [],
        //
        [IDS.INSUREDS]: [
            {
                // [IDS.BIRTHDAY]: null,
                [IDS.BIRTHDAY]: moment('2000-01-01'),
                [IDS.LAST_NAME]: 'ZTESTOV 1',
                [IDS.FIRST_NAME]: 'ZTEST 1',
                [IDS.PASSPORT_SERIAL]: '11',
                [IDS.PASSPORT_NUMBER]: '111111',
            },
        ],
        //
        //     [IDS.OPTIONS]: {
        //         [IDS.ASSISTANCE]: 'express',
        //     },
        //     [IDS.PROMOCODE_OR_BONUSES]: 'bonuses',
        //     [IDS.BONUSES]: 0,
        //     [IDS.AGREEMENT_WITH_RULES]: false,
        //     [IDS.AGREEMENT_WITH_PROTECTION_POLICY]: false,
        //     [IDS.INSURANT]: {
        //         [IDS.LAST_NAME]: 'Тестов',
        //         [IDS.FIRST_NAME]: 'Тест',
        //         [IDS.MIDDLE_NAME]: 'Тестович',
        //         [IDS.BIRTHDAY]: moment('1999-01-01'),
        //         [IDS.ADDRESS]: 'Тестовый адрес',
        //         [IDS.PASSPORT_SERIAL]: '4444',
        //         [IDS.PASSPORT_NUMBER]: '555555',
        //     },
    }
}

export default INIT_VALUES
