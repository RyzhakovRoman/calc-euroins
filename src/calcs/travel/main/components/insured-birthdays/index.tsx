import * as React from 'react'
import {FC, useCallback} from 'react'
import CalcCard from '../../../../common/components/calc-card'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import Button from 'antd/lib/button'
import 'antd/lib/button/style'
import Input from 'antd/lib/input'
import 'antd/lib/input/style'
import {UserAddOutlined} from '@ant-design/icons'
import * as moment from 'moment'
import {COMPONENT_SIZE, MAX_NUMBER_OF_INSURED} from '../../constants'
import Form, {FormInstance} from 'antd/lib/form'
import 'antd/lib/form/style'
import Date from '../../../../../common/components/custom-form-components/date'
import IDS from '../../constants/ids'
import MinusCircleOutlined from '@ant-design/icons/lib/icons/MinusCircleOutlined'
import './index.less'
import resetInsuredIsInsurant from '../../helpers/reset-insured-is-insurant'

interface InsuredBirthdaysPropsInterface {
    form: FormInstance
}

const {Item, List} = Form

const validator = async (r, v) => {
    if (!v) return Promise.reject('Введите дату')
    if (v > moment()) return Promise.reject('Неверная дата')
    return Promise.resolve()
}

const InsuredBirthdays: FC<InsuredBirthdaysPropsInterface> = ({form}) => {
    const handleRemoveOrChangeDate = useCallback(() => {
        if (form.getFieldValue(IDS.INSURED_IS_INSURANT_ID) !== null)
            resetInsuredIsInsurant(form)
    }, [])

    return (
        <CalcCard>
            <h2>Даты рождения застрахованных</h2>

            <List name={IDS.INSUREDS}>
                {(fields, {add, remove}) => {
                    return (
                        <Row>
                            {fields.map(field => (
                                <Col key={field.key}>
                                    <Item
                                        {...field}
                                        name={[field.name, IDS.BIRTHDAY]}
                                        fieldKey={[
                                            field.fieldKey,
                                            IDS.BIRTHDAY,
                                        ]}
                                        rules={[{validator}]}
                                        className={'insured-birthdays__item'}
                                    >
                                        <Date
                                            onChange={() =>
                                                handleRemoveOrChangeDate()
                                            }
                                        />
                                    </Item>
                                    {fields.length > 1 ? (
                                        <MinusCircleOutlined
                                            className={
                                                'insured-birthdays__icon-minus'
                                            }
                                            onClick={() => {
                                                remove(field.name)
                                                handleRemoveOrChangeDate()
                                            }}
                                        />
                                    ) : null}
                                </Col>
                            ))}

                            <Col>
                                <Button
                                    className={'insured-birthdays__add-button'}
                                    type={'dashed'}
                                    size={COMPONENT_SIZE}
                                    onClick={() => add()}
                                    disabled={
                                        fields.length === MAX_NUMBER_OF_INSURED
                                    }
                                >
                                    <UserAddOutlined /> Добавить туриста
                                </Button>
                            </Col>
                        </Row>
                    )
                }}
            </List>
        </CalcCard>
    )
}

export default InsuredBirthdays
