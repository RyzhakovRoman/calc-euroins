import * as React from 'react'
import {FC, memo} from 'react'
import {Row, Col} from 'antd/lib/grid'
import 'antd/lib/grid/style'
import Form from 'antd/lib/form'
import 'antd/lib/form/style'
import Input from 'antd/lib/input'
import 'antd/lib/input/style'
import IDS from '../../../constants/ids'
import LABELS from '../../../constants/labels'
import {COMPONENT_SIZE} from '../../../constants'
import {STANDART_ITEM_RULES} from '../../../../../common/constants'

const {Item} = Form

interface FieldData {
    name: number
    key: number
    fieldKey: number
}

interface PassportPropsInterface {
    field: FieldData
    title?: string
    onSerialChange?: () => void
    onNumberChange?: () => void
}

const Passport: FC<PassportPropsInterface> = memo(
    ({field, title = 'Паспорт РФ', onSerialChange, onNumberChange}) => {
        return (
            <Row gutter={{sm: 8, md: 16, xl: 24}}>
                <Col xs={24} sm={24}>
                    <h3>{title}</h3>
                </Col>
                <Col xs={6} sm={4}>
                    <Item
                        {...field}
                        name={[field.name, IDS.PASSPORT_SERIAL]}
                        fieldKey={[field.fieldKey, IDS.PASSPORT_SERIAL]}
                        label={LABELS.SERIAL}
                        rules={STANDART_ITEM_RULES}
                        required
                    >
                        <Input
                            size={COMPONENT_SIZE}
                            onChange={onSerialChange}
                        />
                    </Item>
                </Col>
                <Col xs={9} sm={6}>
                    <Item
                        {...field}
                        name={[field.name, IDS.PASSPORT_NUMBER]}
                        fieldKey={[field.fieldKey, IDS.PASSPORT_NUMBER]}
                        label={LABELS.NUMBER}
                        rules={STANDART_ITEM_RULES}
                        required
                    >
                        <Input
                            size={COMPONENT_SIZE}
                            onChange={onNumberChange}
                        />
                    </Item>
                </Col>
            </Row>
        )
    }
)

export default Passport
