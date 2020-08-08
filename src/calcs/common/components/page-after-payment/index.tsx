import * as React from 'react'
import {FC, ReactNode, useCallback, useEffect} from 'react'
import {Row, Col} from 'antd/lib/grid'
import 'antd/lib/grid/style'
import UrlParamsInterface from '../../types/url-params'
import Button from 'antd/lib/button'
import 'antd/lib/button/style'

const title = {
    error: 'Ошибка оплаты!',
    success: 'Оплата прошла успешно!',
}

const content = {
    error: (
        <div>
            <p>
                Вы вернулись со страницы платежной системы, но оплата страхового
                полиса не была сделана по независящим от нас причинам.
            </p>
            <p>
                Оплата страхового полиса не была произведена. Для формирования
                страхового полиса необходимо произвести его оплату.
            </p>
        </div>
    ),
    success: (
        <div>
            <p>
                Вы вернулись со страницы платежной системы. Ваш страховой полис
                успешно оплачен. В ближайшее время мы сформируем страховой полис
                и отправим его на Вашу электронную почту в формате PDF (от 1 до
                15 минут).
            </p>
            <p>
                Если Вы не получили страховой полис, то проверьте папку почты
                СПАМ или Нежелательная почта Если у Вас возникли проблемы, то
                напишите нам на электронную почту epolis@euro-ins.ru. Спасибо,
                что воспользовались услугами ООО РСО "ЕВРОИНС". Будем рады
                видеть Вас снова на нашем сайте.
            </p>
        </div>
    ),
}

interface PageAfterPaymentPropsInterface {
    params: UrlParamsInterface
    rootNodeId: string
    successContent?: ReactNode
}

const PageAfterPayment: FC<PageAfterPaymentPropsInterface> = ({
    params,
    rootNodeId,
    successContent,
}) => {
    const goToCalculator = useCallback(() => {
        // @ts-ignore
        window.location = window.location.origin + window.location.pathname
    }, [])

    useEffect(() => {
        if (params.payment_status) {
            const elem = document.getElementById(rootNodeId)
            elem.scrollIntoView({behavior: 'smooth'})
        }
    }, [])

    return (
        <Row gutter={16} justify={'center'}>
            <Col lg={14} md={23} sm={24}>
                <h1>{title[params.payment_status]}</h1>
            </Col>
            <Col lg={14} md={23} sm={24}>
                {content[params.payment_status]}
                <br />
                {params.payment_status === 'success' && successContent
                    ? successContent
                    : null}
                <br />
                <Button onClick={goToCalculator}>
                    Вернуться в калькулятор
                </Button>
            </Col>
        </Row>
    )
}

export default PageAfterPayment
