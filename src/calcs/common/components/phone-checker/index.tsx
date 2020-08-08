import * as React from 'react'
import {PureComponent} from 'react'
import Input from 'antd/lib/input'
import 'antd/lib/input/style'
import Form, {FormInstance} from 'antd/lib/form'
import 'antd/lib/form/style'
import {Row, Col} from 'antd/lib/grid'
import 'antd/lib/grid/style'
import SmsManager from '../../../common/classes/sms-manager'
import './index.less'
import CalcCard from '../calc-card'

const {Item} = Form

interface PhoneCheckerPropsInterface {
    form: FormInstance
    stepIsActive: boolean
    phoneId: string | string[]
    globalOptions: {code: string}
}

interface PhoneCheckerStateInterface {
    smsInfo: string
    phone: number
}

export default class PhoneChecker extends PureComponent<
    PhoneCheckerPropsInterface,
    PhoneCheckerStateInterface
> {
    codeForSms: string
    sm: SmsManager
    code: string

    state = {
        smsInfo: '',
        phone: undefined,
    }

    constructor(props) {
        super(props)
        this.codeForSms = ''
        this.sm = new SmsManager()
        this.code = props.globalOptions.code as string
    }

    static defaultProps = {
        phoneId: ['insurant', 'phone'],
    }

    /*
     * Вызывается после перерендеринга (принимает prevProps, prevState)
     */
    componentDidUpdate() {
        const {stepIsActive, phoneId} = this.props

        // если страница неактивна выходим
        if (stepIsActive === false) return

        const {getFieldValue} = this.props.form
        // извлекаем текущий введенный номер
        const insurant = {
            phone: getFieldValue(phoneId),
        }

        // сравниваем текущий введеный номер и тот для которого отправленна смс
        // если они различаются то мы заного отправляем смс
        if (insurant.phone !== this.state.phone) {
            this.setState(
                {
                    smsInfo: '',
                    phone: insurant.phone,
                },
                () => {
                    // извлекаем код из смс
                    this.codeForSms = this.sm.code

                    // отправляем смс, передаем callback в который будет передана информация о доставке смс
                    this.sm.send(insurant.phone, this.code, smsInfo => {
                        this.setState({
                            ...this.state,
                            smsInfo,
                        })
                    })
                }
            )
        }
    }

    handleCodeChange = () => {
        this.props.form.validateFields(['smsCode']).then()
    }

    smsCodeValidator = (r, v, c) => {
        if (`${v}`.length === 5) {
            if (this.codeForSms !== v) {
                r.message = 'Введен неверный код!'
                c(new Error('compare code false'))
            }
            c()
        }
    }

    render() {
        const {form, phoneId} = this.props,
            {getFieldValue} = form

        return (
            <CalcCard>
                <h2>Подтверждение номера телефона</h2>

                <p>
                    На номер <b>{getFieldValue(phoneId)}</b> был выслан код,
                    который подтверждает Ваше согласие на заключение договора
                    страхования и оплату страховой премии. Пожалуйста, введите
                    его в нижнюю ячейку. Обратите внимание, что оплату в банке
                    необходимо сделать в течение 10 минут. Если Вы не успели
                    сделать оплату в срок, то ее можно сделать повторно.
                </p>

                <Row justify={'center'}>
                    <Col>
                        <Item
                            name={'smsCode'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Введите код из смс',
                                    validator: this.smsCodeValidator,
                                },
                            ]}
                        >
                            <Input
                                size={'large'}
                                placeholder='Введите код из смс'
                                onChange={this.handleCodeChange}
                            />
                        </Item>
                    </Col>

                    <Col sm={24} className={'calc-phone-checker-sms-info'}>
                        {this.state.smsInfo}
                    </Col>
                </Row>
            </CalcCard>
        )
    }
}
