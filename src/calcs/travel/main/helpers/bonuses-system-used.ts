import GlobalOptionsInterface from '../types/global-options'

const bonusesSystemUsed = (globalOptions: GlobalOptionsInterface): boolean => {
    return !!(
        (window.location.hostname === 'lk.euro-ins.ru' ||
            window.location.hostname === 'euro-ins.lh') &&
        globalOptions.bonuses &&
        globalOptions.clientIsn
    )
}

export default bonusesSystemUsed
