import * as React from 'react'
import {FC, memo} from 'react'
import {Row, Col} from 'antd/lib/grid'
import 'antd/lib/grid/style'
import Form from 'antd/lib/form'
import 'antd/lib/form/style'
import Input from 'antd/lib/input'
import 'antd/lib/input/style'
import CalcCard from '../../../../common/components/calc-card'
import IDS from '../../constants/ids'
import PhoneItem from '../../../../../common/components/form-items/phone-item'
import {COMPONENT_SIZE} from '../../constants'
import LABELS from '../../constants/labels'

const {Item} = Form

const Contacts: FC = memo(() => {
    return (
        <CalcCard>
            <h2>Данные для получения полиса</h2>

            <Row gutter={{sm: 8, md: 16, xl: 24}}>
                <Col sm={12} lg={8}>
                    <Item
                        name={IDS.INSURANT_EMAIL}
                        label={LABELS.EMAIL}
                        rules={[
                            {
                                required: true,
                                type: 'email',
                                message: 'Введите корректный email',
                            },
                        ]}
                        validateTrigger={'onBlur'}
                    >
                        <Input size={COMPONENT_SIZE} />
                    </Item>
                </Col>
                <Col sm={12} lg={8}>
                    <PhoneItem name={IDS.INSURANT_PHONE} />
                </Col>
            </Row>
        </CalcCard>
    )
})

export default Contacts
