import * as React from 'react'
import {FC, memo, useCallback, useEffect, useState} from 'react'
import Form from 'antd/lib/form'
import 'antd/lib/form/style'
import Select from 'antd/lib/select'
import 'antd/lib/select/style'
import IDS from '../../constants/ids'
import CalcCard from '../../../../common/components/calc-card'
import {SportsType} from '../../types/models/sport'
import {COMPONENT_SIZE} from '../../constants'
import LABELS from '../../constants/labels'
import SportsStateType from '../../types/state/sports-state'
import {
    createErrorState,
    createInitialState,
    createStartedState,
    createSuccessState,
} from '../../../../../common/helpers/create-request-state'
import Api from '../../classes/api'

const {Item} = Form,
    {Option} = Select,
    initState = createInitialState<SportsType>()

interface SportSelectionPropsInterface {
    onValueChange: (fieldName: string | string[]) => void
}

const SportSelection: FC<SportSelectionPropsInterface> = memo(
    ({onValueChange}) => {
        const [sports, setSports] = useState<SportsStateType>(initState),
            handleComponentDidMount = useCallback(async () => {
                setSports(createStartedState())
                const result = await Api.getSports()
                if ('errors' in result) return createErrorState(result.errors)
                setSports(createSuccessState(result))
            }, []),
            handleSelect = useCallback(() => {
                onValueChange(IDS.SPORTS)
            }, [onValueChange])

        useEffect(() => {
            handleComponentDidMount().then()
        }, [])

        return (
            <CalcCard>
                <h2>Активный отдых</h2>

                <Item name={IDS.SPORTS} label={LABELS.SPORTS}>
                    <Select
                        mode={'multiple'}
                        placeholder={'Выберите вид спорта'}
                        size={COMPONENT_SIZE}
                        loading={sports.requestStatus === 'started'}
                        onSelect={handleSelect}
                        onDeselect={handleSelect}
                        showSearch
                        optionFilterProp={'children'}
                    >
                        {sports.data !== null &&
                            sports.data.map(sport => (
                                <Option value={sport.id} key={sport.id}>
                                    {sport.name}
                                </Option>
                            ))}
                    </Select>
                </Item>
            </CalcCard>
        )
    }
)

export default SportSelection
