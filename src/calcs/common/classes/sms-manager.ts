const url = 'https://api.euro-ins.ru/sms/confirm_code/send',
    method = 'POST'

declare const ENV_IS_DEV: boolean

interface CallbackInterface {
    (smsStatus: string): void
}

interface DataForRequestInterface {
    phone: string
    message: string
    code: string
}

export default class SmsManager {
    code: string
    headers: Headers

    constructor() {
        // формируем код для отпраки его в смс
        this.code = `${SmsManager.randomIntFromInterval(10000, 99999)}`
        if (ENV_IS_DEV) console.log(this.code)
        // создаем заголовки для общения с сервером
        this.headers = new Headers()
        this.headers.append('Content-Type', 'application/json')
    }

    /**
     * В callback функцию передается текст о успехе/ошибке отправки смс
     */
    send(phone: string, code: string, callback: CallbackInterface) {
        const formattedPhone = phone.replace(/\D/g, '')
        const apiData: DataForRequestInterface = {
            code,
            phone: formattedPhone,
            message: this.code,
        }

        fetch(url, {
            method,
            headers: this.headers,
            body: JSON.stringify(apiData),
        })
            .then(response => {
                const {status} = response
                if (status === 200) {
                    callback('СМС доставлено!')
                    return false
                } else if (status === 400) {
                    throw new Error('Бэк вернул 400, смс не доставлено')
                }
            })
            .catch(error => {
                callback('Ошибка отправки смс!')
                console.log(error)
            })
    }

    static randomIntFromInterval(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}

// OTk5OTk=

// componentDidUpdate
// актуальный телефон 89307475436
// телефон для которого отправлена смс undefined
// componentDidUpdate
// актуальный телефон 89307475436
// телефон для которого отправлена смс 89307475436
// MTI3MzI=
// send
// {"insType":"health","task":"send","pid":0,"name":"Фамилия Имя ","phone":"89307475436","code":"MTI3MzI="}
// response send sms  201840-1000585
// check
// response check sms  100
// getTextByCode
// check
// response check sms  102
// getTextByCode
// check
// response check sms  102
// getTextByCode
// check
// response check sms  102
// getTextByCode
// check
// response check sms  102
// getTextByCode
// check
// response check sms  103
// getTextByCode
// smsInfo Сообщение доставлено!
// componentDidUpdate
// актуальный телефон 89307475436
// телефон для которого отправлена смс 89307475436
