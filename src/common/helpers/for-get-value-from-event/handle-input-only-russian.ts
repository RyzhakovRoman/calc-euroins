import notification from 'antd/lib/notification'
import 'antd/lib/notification/style'

const handleInputOnlyRussian = e => {
    // 65 & 90 включительно (диапозон кодов больших английских букв)
    const val = e.target.value,
        charCode = val.charCodeAt(val.length - 1)

    if (
        (charCode > 1039 && charCode < 1104) ||
        charCode === 1025 ||
        charCode === 1105
    )
        return val
    else {
        notification.info({
            message: 'Пожалуйста, переключите язык на клавиатуре',
        })
        return val.substr(0, val.length - 1)
    }
}

export default handleInputOnlyRussian
