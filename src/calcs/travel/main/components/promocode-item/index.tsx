import * as React from 'react'
import {FC, useCallback, useState} from 'react'
import Form from 'antd/lib/form'
import 'antd/lib/form/style'
import Input from 'antd/lib/input'
import 'antd/lib/input/style'
import {COMPONENT_SIZE} from '../../constants'
import PROMOCODES from '../../constants/promocodes'
import {ValidateStatus} from 'antd/lib/form/FormItem'
import LABELS from '../../constants/labels'
import IDS from '../../constants/ids'

const {Item} = Form

interface PromocodeItemPropsInterface {
    onValid: (fieldName: string | string[]) => void
    onNotValid: (fieldName: string | string[]) => void
}

const PromocodeItem: FC<PromocodeItemPropsInterface> = ({
    onValid,
    onNotValid,
}) => {
    const [validateStatus, setValidateStatus] = useState<ValidateStatus>(''),
        validator = useCallback(
            (r, v) => {
                v = v.toLowerCase()
                if (v === '') {
                    setValidateStatus('error')
                    onNotValid(IDS.PROMOCODE)
                    return Promise.reject('Введите промокод')
                }
                if (!PROMOCODES.some(cur => v === cur.promocode)) {
                    setValidateStatus('warning')
                    onNotValid(IDS.PROMOCODE)
                    return Promise.reject('Неверный промокод')
                }
                setValidateStatus('success')
                onValid(IDS.PROMOCODE)
                return Promise.resolve()
            },
            [onValid]
        )

    return (
        <Item
            name={IDS.PROMOCODE}
            label={LABELS.PROMOCODE}
            rules={[{validator}]}
            validateStatus={validateStatus}
        >
            <Input size={COMPONENT_SIZE} />
        </Item>
    )
}

export default PromocodeItem
