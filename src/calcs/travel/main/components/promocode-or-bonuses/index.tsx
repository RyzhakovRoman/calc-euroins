import * as React from 'react'
import {FC, memo} from 'react'
import Form, {FormInstance} from 'antd/lib/form'
import 'antd/lib/form/style'
import Radio from 'antd/lib/radio'
import 'antd/lib/radio/style'
import CalcCard from '../../../../common/components/calc-card'
import IDS from '../../constants/ids'
import {BONUS_COVERAGE_PERCENT, COMPONENT_SIZE} from '../../constants'
import PromocodeItem from '../promocode-item'
import Bonuses from '../../../../common/components/bonuses'
import GlobalOptionsInterface from '../../types/global-options'

const {Item} = Form,
    {Group, Button} = Radio,
    VALUES = {
        PROMOCODE: 'promocode',
        BONUSES: 'bonuses',
    }

interface PromocodeOrBonusesPropsInterface {
    cost: number
    globalOptions: GlobalOptionsInterface
    onValueChange: (fieldName: string | string[]) => void
}

const PromocodeOrBonuses: FC<PromocodeOrBonusesPropsInterface> = memo(
    ({cost, globalOptions, onValueChange}) => {
        return (
            <CalcCard>
                <Item name={IDS.PROMOCODE_OR_BONUSES}>
                    <Group size={COMPONENT_SIZE}>
                        <Button value={VALUES.PROMOCODE}>Промокод</Button>
                        <Button value={VALUES.BONUSES}>Баллы</Button>
                    </Group>
                </Item>
                <Item shouldUpdate={true}>
                    {(form: FormInstance) => {
                        const promocodeSelected =
                            form.getFieldValue(IDS.PROMOCODE_OR_BONUSES) ===
                            VALUES.PROMOCODE

                        if (promocodeSelected)
                            return (
                                <div style={{maxWidth: 250}}>
                                    <PromocodeItem
                                        onValid={onValueChange}
                                        onNotValid={onValueChange}
                                    />
                                </div>
                            )
                        else
                            return (
                                <Bonuses
                                    form={form}
                                    bonuses={globalOptions.bonuses}
                                    cost={cost}
                                    percent={BONUS_COVERAGE_PERCENT}
                                    onAfterChange={onValueChange}
                                />
                            )
                    }}
                </Item>
            </CalcCard>
        )
    }
)

export default PromocodeOrBonuses
