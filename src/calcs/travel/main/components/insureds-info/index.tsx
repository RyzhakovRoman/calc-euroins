import * as React from 'react'
import {FC, memo, useCallback} from 'react'
import Form, {FormInstance} from 'antd/lib/form'
import 'antd/lib/form/style'
import {Row, Col} from 'antd/lib/grid'
import 'antd/lib/grid/style'
import Input from 'antd/lib/input'
import 'antd/lib/input/style'
import Divider from 'antd/lib/divider'
import 'antd/lib/divider/style'
import CalcCard from '../../../../common/components/calc-card'
import IDS from '../../constants/ids'
import Date from '../../../../../common/components/custom-form-components/date'
import LABELS from '../../constants/labels'
import {COMPONENT_SIZE, RF_ONLY_ID} from '../../constants'
import Passport from './passport'
import {STANDART_ITEM_RULES} from '../../../../common/constants'
import handleInputOnlyEnglish from '../../../../../common/helpers/for-get-value-from-event/handle-input-only-english'
import handleInputOnlyRussian from '../../../../../common/helpers/for-get-value-from-event/handle-input-only-russian'
import FieldList from './field-list'

const {Item, List} = Form

interface InsuredsInfoPropsInterface {
    form: FormInstance
}

const InsuredsInfo: FC<InsuredsInfoPropsInterface> = memo(({form}) => {
    return (
        <Item
            shouldUpdate={(prevValues, currentValues) =>
                prevValues[IDS.COUNTRIES] !== currentValues[IDS.COUNTRIES] ||
                prevValues[IDS.INSURED_IS_INSURANT_ID] !==
                    currentValues[IDS.INSURED_IS_INSURANT_ID]
            }
            noStyle
        >
            {({getFieldValue}) => {
                const russiaOnly = getFieldValue(IDS.COUNTRIES).includes(
                    RF_ONLY_ID
                )

                let titlePart = '(заполните на английском языке)',
                    passportTitle = 'Данные загранпаспорта',
                    getValueFromEvent = handleInputOnlyEnglish

                if (russiaOnly) {
                    titlePart = ''
                    passportTitle = undefined
                    getValueFromEvent = handleInputOnlyRussian
                }

                return (
                    <CalcCard>
                        <h2>Информация о застрахованных {titlePart}</h2>

                        <List name={IDS.INSUREDS}>
                            {fields => (
                                <FieldList
                                    form={form}
                                    russiaOnly={russiaOnly}
                                    passportTitle={passportTitle}
                                    getValueFromEvent={getValueFromEvent}
                                    fields={fields}
                                />
                            )}
                        </List>
                    </CalcCard>
                )
            }}
        </Item>
    )
})

export default InsuredsInfo
