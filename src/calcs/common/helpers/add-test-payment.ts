import notification from 'antd/lib/notification'
import 'antd/lib/notification/style'

interface GlobalOptionsInterface {
    dinamyc: {
        test: boolean
    }
}

const addTestPayment = (globalOptions: GlobalOptionsInterface) => {
    const codes = ['KeyE', 'KeyP', 'KeyT'],
        pressed = new Set()

    document.addEventListener('keydown', e => {
        pressed.add(e.code)
        for (const code of codes) if (!pressed.has(code)) return
        pressed.clear()
        globalOptions.dinamyc.test = !globalOptions.dinamyc.test
        if (globalOptions.dinamyc.test)
            notification.info({
                message: 'Включена тестовая оплата!',
                description:
                    'Если вы сделали это случайно, то зажмите E+T+P (на английской раскладке).',
                duration: 6,
            })
        else notification.info({message: 'Тестовая оплата выключена!'})
    })

    document.addEventListener('keyup', e => {
        pressed.delete(e.code)
    })
}

export default addTestPayment
