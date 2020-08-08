import * as moment from 'moment'
declare const ENV_IS_DEV: boolean

export const COMPONENT_SIZE = 'large'
export const POSSIBLE_PERIODS_MULTI = [30, 60, 90, 180, 365]
export const MIN_START_DATE = moment({h: 0, m: 0, s: 0, ms: 0}).add(2, 'days')
export const MAX_NUMBER_OF_INSURED = 5
export const INSURANCE_SUMS = [35000, 50000]
export const INSURANCE_SUMS_RUS = [350000, 700000]
export const BONUS_COVERAGE_PERCENT = 20
export const RF_ONLY_ID = 175
export const URL_RULES =
    'https://www.euro-ins.ru/wp-content/uploads/pravila/3-1-Pravila_strah_VZR.pdf'
export const URL_PROGRAM = 'https://euro-ins.ru/calc/files/program_main.pdf'
export const URL_USER_AGREEMENT =
    'https://euro-ins.ru/calc/files/user_agreement.pdf'

export const HEADER_STEPS = [
    {
        name: 'Параметры поездки',
    },
    {
        name: 'Наполнение',
    },
    {
        name: 'Данные и оплата',
    },
    {
        name: 'Проверка телефона',
    },
]

export const POST = 'POST'
export const HEADERS = new Headers([['Content-Type', 'application/json']])
export const DOMEN = ENV_IS_DEV
    ? 'https://api.euro-ins.ru'
    : 'https://api.euro-ins.ru'
export const URL_GET_COST = `${DOMEN}/vzr/policy/price`
export const URL_CREATE_POLICY = `${DOMEN}/vzr/policy/create`
export const URL_GET_PAY_URL = `${DOMEN}/vzr/policy/get_pay_url`
export const URL_GET_ASSISTANCES = `https://euro-ins.ru/api/vzr/assistances/get`
export const URL_GET_SPORTS = `https://euro-ins.ru/api/vzr/sports/list`
