import * as React from 'react'
import {ChangeEvent, FC} from 'react'
import IDS from '../../../constants/ids'
import Form from 'antd/lib/form'
import 'antd/lib/form/style'
import {Col, Row} from 'antd/lib/grid'
import 'antd/lib/grid/style'
import Divider from 'antd/lib/divider'
import 'antd/lib/divider/style'
import Input from 'antd/lib/input'
import 'antd/lib/input/style'
import LABELS from '../../../constants/labels'
import Date from '../../../../../../common/components/custom-form-components/date'
import {STANDART_ITEM_RULES} from '../../../../../common/constants'
import {COMPONENT_SIZE} from '../../../constants'
import Passport from '../passport'
import {useCallback} from 'react'
import {FormInstance} from 'antd/lib/form'

interface FieldListPropsInterface {
    form: FormInstance
    fields: any
    passportTitle: string
    russiaOnly: boolean

    getValueFromEvent: (e: ChangeEvent) => void
}

const {Item} = Form

const FieldList: FC<FieldListPropsInterface> = ({
    form,
    fields,
    passportTitle,
    russiaOnly,
    getValueFromEvent,
}) => {
    const insuredIsInsurantId = form.getFieldValue(IDS.INSURED_IS_INSURANT_ID),
        handleChange = useCallback((insuredId, fieldName) => {
            const insured = form.getFieldValue(IDS.INSUREDS)[insuredId]

            form.setFieldsValue({
                [IDS.INSURANT]: {
                    [fieldName]: insured[fieldName],
                },
            })
        }, [])

    return (
        <>
            {fields.map((field, i) => {
                const isInsurant = field.name === insuredIsInsurantId

                let handleLastNameChange,
                    handleFirstNameChange,
                    handleMiddleNameChange,
                    handlePassportSerial,
                    handlePassportNumber

                if (isInsurant) {
                    handleLastNameChange = () => {
                        handleChange(field.name, IDS.LAST_NAME)
                    }
                    handleFirstNameChange = () => {
                        handleChange(field.name, IDS.FIRST_NAME)
                    }
                    handleMiddleNameChange = () => {
                        handleChange(field.name, IDS.MIDDLE_NAME)
                    }
                    handlePassportSerial = () => {
                        handleChange(field.name, IDS.PASSPORT_SERIAL)
                    }
                    handlePassportNumber = () => {
                        handleChange(field.name, IDS.PASSPORT_NUMBER)
                    }
                }

                return (
                    <Row gutter={{sm: 8, md: 16, xl: 24}} key={field.key}>
                        {i > 0 ? (
                            <Col sm={24}>
                                <Divider />
                            </Col>
                        ) : null}
                        <Col>
                            <Item
                                {...field}
                                name={[field.name, IDS.BIRTHDAY]}
                                fieldKey={[field.name, IDS.BIRTHDAY]}
                                label={LABELS.BIRTHDAY}
                                required
                            >
                                <Date disabled={true} />
                            </Item>
                        </Col>
                        <Col>
                            <Item
                                {...field}
                                name={[field.name, IDS.LAST_NAME]}
                                fieldKey={[field.fieldKey, IDS.LAST_NAME]}
                                label={LABELS.LAST_NAME}
                                rules={STANDART_ITEM_RULES}
                                getValueFromEvent={getValueFromEvent}
                                required
                            >
                                <Input
                                    size={COMPONENT_SIZE}
                                    onChange={handleLastNameChange}
                                />
                            </Item>
                        </Col>
                        <Col>
                            <Item
                                {...field}
                                name={[field.name, IDS.FIRST_NAME]}
                                fieldKey={[field.fieldKey, IDS.FIRST_NAME]}
                                label={LABELS.FIRST_NAME}
                                rules={STANDART_ITEM_RULES}
                                getValueFromEvent={getValueFromEvent}
                                required
                            >
                                <Input
                                    size={COMPONENT_SIZE}
                                    onChange={handleFirstNameChange}
                                />
                            </Item>
                        </Col>
                        {russiaOnly ? (
                            <Col>
                                <Item
                                    {...field}
                                    name={[field.name, IDS.MIDDLE_NAME]}
                                    fieldKey={[field.fieldKey, IDS.MIDDLE_NAME]}
                                    label={LABELS.MIDDLE_NAME}
                                    rules={STANDART_ITEM_RULES}
                                    getValueFromEvent={getValueFromEvent}
                                    required
                                >
                                    <Input
                                        size={COMPONENT_SIZE}
                                        onChange={handleMiddleNameChange}
                                    />
                                </Item>
                            </Col>
                        ) : null}
                        <Col sm={24}>
                            <Passport
                                field={field}
                                title={passportTitle}
                                onSerialChange={handlePassportSerial}
                                onNumberChange={handlePassportNumber}
                            />
                        </Col>
                    </Row>
                )
            })}
        </>
    )
}

export default FieldList
