export default function bonusesSystemUsed(globalOptions: any) {
    return (
        (window.location.hostname === 'lk.euro-ins.ru' ||
            window.location.hostname === 'euro-ins.lh') &&
        globalOptions.bonuses !== undefined &&
        globalOptions.clientIsn !== undefined
    )
}
