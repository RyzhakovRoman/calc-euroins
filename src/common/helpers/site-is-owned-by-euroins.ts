/*
    Функция помогает определить выполяется ли код
    на доменах в зоне euro-ins.ru
 */
const siteIsOwnedByEuroins = () => {
    return /^https?:\/\/(www)?(.)*euro-ins(.)+$/.test(window.location.origin)
}

export default siteIsOwnedByEuroins
