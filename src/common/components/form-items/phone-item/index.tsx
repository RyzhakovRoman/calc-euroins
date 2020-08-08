import * as React from 'react'
import {FC} from 'react'
import Form from 'antd/lib/form'
import 'antd/lib/form/style'
import Phone from '../../custom-form-components/phone'
import * as moment from 'moment'

interface PhonePropsInterface {
    name?: string | string[]
    size?: string
    disabled?: boolean
}

const {Item} = Form,
    validator = async (r, v) => {
        if (!v || ~v.indexOf('_')) return Promise.reject('Введите телефон')
        return Promise.resolve()
    }

const PhoneItem: FC<PhonePropsInterface> = ({
    name = 'phone',
    size,
    disabled,
}) => {
    return (
        <Item name={name} label={'Телефон'} rules={[{validator}]} required>
            <Phone size={size} disabled={disabled} />
        </Item>
    )
}

export default PhoneItem
