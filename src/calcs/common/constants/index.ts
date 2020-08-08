export const SCREEN_IS_SMALL = window.innerWidth < 768

export const OUTPUT_DATE_FORMAT = 'DD.MM.YYYY'
export const REQUEST_DATE_FORMAT = 'YYYY-MM-DD'

export const STANDART_ITEM_RULES = [{required: true, message: 'Введите данные'}]
export const DATE_PICKER_PLACEHOLDER = '__.__.____'

// имя объекта window['yaCounter21173200'] для основного сайта euro-ins.ru
export const NAME_YM_EUROINS = 'yaCounter21173200'

export const DOMEN = ENV_IS_DEV
    ? 'http://api.euro-ins.lh'
    : 'http://api.euro-ins.ru'
