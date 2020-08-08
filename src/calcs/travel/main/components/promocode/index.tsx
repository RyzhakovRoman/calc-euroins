import * as React from 'react'
import {FC, useCallback, useState} from 'react'
import CalcCard from '../../../../common/components/calc-card'
import Form, {FormInstance} from 'antd/lib/form'
import 'antd/lib/form/style'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import Checkbox from 'antd/lib/checkbox'
import 'antd/lib/checkbox/style'
import PromocodeItem from '../promocode-item'
import IDS from '../../constants/ids'
import './index.less'

const {Item} = Form

interface PromocodePropsInterface {
    form: FormInstance
    onValueChange: (fieldName: string | string[]) => void
}

const Promocode: FC<PromocodePropsInterface> = ({
    form: {setFieldsValue, validateFields},
    onValueChange,
}) => {
    const [checked, setChecked] = useState<boolean>(false),
        handleChange = useCallback(e => {
            setFieldsValue({[IDS.PROMOCODE]: ''})
            onValueChange(IDS.PROMOCODE)
            validateFields([IDS.PROMOCODE]).then()
            setChecked(e.target.checked)
        }, [])

    return (
        <CalcCard>
            <Checkbox
                className={checked ? 'promocode__checkbox_margin_bottom' : ''}
                onChange={handleChange}
            >
                <span> У меня есть промокод</span>
            </Checkbox>
            <Row>
                <Col xs={24} sm={12} lg={5}>
                    {checked ? (
                        <PromocodeItem
                            onValid={() => onValueChange(IDS.PROMOCODE)}
                            onNotValid={() => onValueChange(IDS.PROMOCODE)}
                        />
                    ) : null}
                </Col>
            </Row>
        </CalcCard>
    )
}

export default Promocode
