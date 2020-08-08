import * as moment from 'moment'

const isAdultValidator = async (r, v) => {
    if (!v) return Promise.reject('Введите дату')
    if (moment().diff(v, 'years') < 18)
        return Promise.reject('Должен быть совершеннолетним')
    return Promise.resolve()
}

export default isAdultValidator
