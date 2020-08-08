/**
 * Делит целые числа по тысячам через пробел 5000 -> 5 000
 */
export default number =>
    (number + '')
        .split('')
        .reverse()
        .join('')
        .match(/.{1,3}/g)
        .join(' ')
        .split('')
        .reverse()
        .join('')
