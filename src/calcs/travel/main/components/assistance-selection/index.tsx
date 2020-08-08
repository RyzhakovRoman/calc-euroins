import * as React from 'react'
import {FC, memo, useCallback, useEffect, useState} from 'react'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import Form from 'antd/lib/form'
import 'antd/lib/form/style'
import Select from 'antd/lib/select'
import 'antd/lib/select/style'
import CalcCard from '../../../../common/components/calc-card'
import IDS from '../../constants/ids'
import AssistancesType from '../../types/models/assistance'
import './index.less'
import AssistancesStateType from '../../types/state/assistances-state'
import {
    createErrorState,
    createInitialState,
    createStartedState,
    createSuccessState,
} from '../../../../../common/helpers/create-request-state'
import Api from '../../classes/api'
import {COMPONENT_SIZE, RF_ONLY_ID} from '../../constants'

const {Item} = Form,
    {Option} = Select,
    initState = createInitialState<AssistancesType>()

const AssistanceSelection: FC = memo(() => {
    const [assistances, setAssistances] = useState<AssistancesStateType>(
            initState
        ),
        handleComponentDidMount = useCallback(async () => {
            setAssistances(createStartedState())
            const result = await Api.getAssistances()
            if ('errors' in result) return createErrorState(result.errors)
            setAssistances(createSuccessState(result))
        }, [])

    useEffect(() => {
        handleComponentDidMount().then()
    }, [])

    return (
        <Item
            shouldUpdate={(prevValues, nextValues) =>
                prevValues[IDS.COUNTRIES] !== nextValues[IDS.COUNTRIES]
            }
            noStyle
        >
            {({getFieldValue}) => {
                const selectedCountries = getFieldValue(IDS.COUNTRIES)

                if (selectedCountries.includes(RF_ONLY_ID)) return null

                return (
                    <CalcCard>
                        <h2>Выбор ассистанса</h2>
                        <p>
                            Ассистанс-компании являются посредниками между
                            страховой компанией и её компаньонами (медицинскими
                            центрами и тп). Они оказывают содействие туристам,
                            находящимся за рубежом, при медицинском
                            обслуживании, организации госпитализации и лечения и
                            так далее.
                        </p>

                        <Row>
                            <Col sm={12} xl={8}>
                                <Item name={[IDS.OPTIONS, IDS.ASSISTANCE]}>
                                    <Select
                                        className={'e-sa__select'}
                                        loading={
                                            assistances.requestStatus ===
                                            'started'
                                        }
                                        size={COMPONENT_SIZE}
                                    >
                                        {assistances.data !== null &&
                                            assistances.data.map(assistance => (
                                                <Option
                                                    value={assistance.code}
                                                    key={assistance.code}
                                                >
                                                    {assistance.name}
                                                </Option>
                                            ))}
                                    </Select>
                                </Item>
                            </Col>
                        </Row>

                        <Item shouldUpdate={true}>
                            {({getFieldValue}) => {
                                if (assistances.data === null) return null

                                const assistanceValue = getFieldValue([
                                        IDS.OPTIONS,
                                        IDS.ASSISTANCE,
                                    ]),
                                    assistanceInfo = assistances.data.find(
                                        assistance =>
                                            assistance.code === assistanceValue
                                    )

                                return (
                                    <Row>
                                        <Col sm={12} xl={10}>
                                            <img
                                                className={'e-sa__img'}
                                                src={assistanceInfo.image}
                                                alt={'Логотип'}
                                            />
                                        </Col>
                                        <Col sm={24} xl={14}>
                                            <p>{assistanceInfo.description}</p>
                                        </Col>
                                    </Row>
                                )
                            }}
                        </Item>
                    </CalcCard>
                )
            }}
        </Item>
    )
})

export default AssistanceSelection
