import * as React from 'react'
import {FC, useCallback} from 'react'
import {Row, Col} from 'antd/lib/grid'
import 'antd/lib/grid/style'
import Form, {FormInstance} from 'antd/lib/form'
import 'antd/lib/form/style'
import Radio from 'antd/lib/radio'
import 'antd/lib/radio/style'
import Input from 'antd/lib/input'
import 'antd/lib/input/style'
import CalcCard from '../../../../common/components/calc-card'
import {COMPONENT_SIZE, RF_ONLY_ID} from '../../constants'
import IDS from '../../constants/ids'
import Date from '../../../../../common/components/custom-form-components/date'
import LABELS from '../../constants/labels'
import PassportData from '../../../../../common/components/passport-data'
import isAdultValidator from '../../../../../common/helpers/validators/is-adult'
import {STANDART_ITEM_RULES} from '../../../../common/constants'
import * as moment from 'moment'
import './index.less'
import resetInsuredIsInsurant from '../../helpers/reset-insured-is-insurant'
import InsuredIsInsurant from './insured-is-insurant'

const {Item, List} = Form,
    {Group, Button} = Radio

const InsurantInfo: FC = () => {
    const setInsuredToInsurant = useCallback(
            ({getFieldValue, setFieldsValue}: FormInstance) => {
                const insureds = getFieldValue(IDS.INSUREDS),
                    insuredIsInsurantId = getFieldValue(
                        IDS.INSURED_IS_INSURANT_ID
                    ),
                    insuredInsurant = insureds[insuredIsInsurantId]

                setFieldsValue({
                    [IDS.INSURANT]: {
                        [IDS.LAST_NAME]: insuredInsurant[IDS.LAST_NAME],
                        [IDS.FIRST_NAME]: insuredInsurant[IDS.FIRST_NAME],
                        [IDS.MIDDLE_NAME]: insuredInsurant[IDS.MIDDLE_NAME],
                        [IDS.BIRTHDAY]: insuredInsurant[IDS.BIRTHDAY],
                        [IDS.PASSPORT_SERIAL]:
                            insuredInsurant[IDS.PASSPORT_SERIAL],
                        [IDS.PASSPORT_NUMBER]:
                            insuredInsurant[IDS.PASSPORT_NUMBER],
                    },
                })
            },
            []
        ),
        handleResetInsured = useCallback(resetInsuredIsInsurant, [])

    return (
        <Item shouldUpdate={true} noStyle>
            {(form: FormInstance) => {
                const {getFieldValue} = form,
                    insureds = getFieldValue(IDS.INSUREDS)

                if (
                    insureds.some(insured => !insured || !insured[IDS.BIRTHDAY])
                )
                    return null

                const adultInsureds = getFieldValue(IDS.INSUREDS).filter(
                        insured =>
                            moment().diff(insured[IDS.BIRTHDAY], 'years') > 18
                    ),
                    countries = getFieldValue(IDS.COUNTRIES),
                    russiaOnly = countries.includes(RF_ONLY_ID),
                    insuredIsInsurantId = getFieldValue(
                        IDS.INSURED_IS_INSURANT_ID
                    ),
                    insuredIsInsurant = insuredIsInsurantId !== null

                return (
                    <CalcCard>
                        <h2>Страхователь (тот, кто оплачивает полис)</h2>

                        {russiaOnly ? (
                            <InsuredIsInsurant
                                adultInsureds={adultInsureds}
                                onInsuredSelect={() =>
                                    setInsuredToInsurant(form)
                                }
                                onReset={() => resetInsuredIsInsurant(form)}
                            />
                        ) : null}

                        <Row gutter={{sm: 8, md: 16, xl: 24}}>
                            <Col sm={12} md={6}>
                                <Item
                                    name={IDS.INSURANT_LAST_NAME}
                                    label={LABELS.LAST_NAME}
                                    rules={STANDART_ITEM_RULES}
                                    required
                                >
                                    <Input
                                        size={COMPONENT_SIZE}
                                        disabled={insuredIsInsurant}
                                    />
                                </Item>
                            </Col>
                            <Col sm={12} md={6}>
                                <Item
                                    name={IDS.INSURANT_FIRST_NAME}
                                    label={LABELS.FIRST_NAME}
                                    rules={STANDART_ITEM_RULES}
                                    required
                                >
                                    <Input
                                        size={COMPONENT_SIZE}
                                        disabled={insuredIsInsurant}
                                    />
                                </Item>
                            </Col>
                            <Col sm={12} md={6}>
                                <Item
                                    name={IDS.INSURANT_MIDDLE_NAME}
                                    label={LABELS.MIDDLE_NAME}
                                    rules={STANDART_ITEM_RULES}
                                    required
                                >
                                    <Input
                                        size={COMPONENT_SIZE}
                                        disabled={insuredIsInsurant}
                                    />
                                </Item>
                            </Col>
                            <Col sm={12} md={6}>
                                <Item
                                    name={IDS.INSURANT_BIRTHDAY}
                                    label={LABELS.BIRTHDAY}
                                    rules={[{validator: isAdultValidator}]}
                                    required
                                >
                                    <Date disabled={insuredIsInsurant} />
                                </Item>
                            </Col>
                            <Col sm={24}>
                                <Item
                                    name={IDS.INSURANT_ADDRESS}
                                    label={LABELS.ADDRESS}
                                    rules={STANDART_ITEM_RULES}
                                    required
                                >
                                    <Input size={COMPONENT_SIZE} />
                                </Item>
                            </Col>
                            <Col sm={24}>
                                <PassportData
                                    namespace={IDS.INSURANT}
                                    disablesSerial={insuredIsInsurant}
                                    disablesNumber={insuredIsInsurant}
                                />
                            </Col>
                        </Row>
                    </CalcCard>
                )
            }}
        </Item>
    )
}

export default InsurantInfo
