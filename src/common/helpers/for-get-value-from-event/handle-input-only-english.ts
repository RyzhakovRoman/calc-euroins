import notification from 'antd/lib/notification'
import 'antd/lib/notification/style'

const handleInputOnlyEnglish = e => {
    // 65 & 90 включительно (диапозон кодов больших английских букв)
    const val = e.target.value,
        newVal = val.toUpperCase(),
        charCode = newVal.charCodeAt(val.length - 1)
    // todo - вывести подсказку
    if (charCode > 64 && charCode < 91) return newVal
    else {
        notification.info({
            message: 'Пожалуйста, переключите язык на клавиатуре',
        })
        return newVal.substr(0, newVal.length - 1)
    }
}

export default handleInputOnlyEnglish
