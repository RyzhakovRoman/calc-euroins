import * as React from 'react'
import {FC, memo} from 'react'
import CurrencyAndSums from '../currency-and-sums'
import SportSelection from '../sport-selection'
import SecondPrograms from '../second-programs'
import PromocodeOrBonusesWrapper from '../promocode-or-bonuses-wrapper'
import {FormInstance} from 'antd/lib/form'
import GlobalOptionsInterface from '../../types/global-options'
import AssistanceSelection from '../assistance-selection'
import AgreementWithRules from '../agreement-with-rules'
import CovidOption from '../covid-option'

interface FillingPropsInterface {
    form: FormInstance
    cost: number
    globalOptions: GlobalOptionsInterface
    onValueChange: (fieldName: string | string[]) => void
    bonusesSystemIsOn: boolean
}

const Filling: FC<FillingPropsInterface> = memo(
    ({form, cost, globalOptions, onValueChange, bonusesSystemIsOn}) => {
        return (
            <>
                <CurrencyAndSums onValueChange={onValueChange} />
                <SportSelection onValueChange={onValueChange} />
                <SecondPrograms onValueChange={onValueChange} />
                <PromocodeOrBonusesWrapper
                    form={form}
                    cost={cost}
                    globalOptions={globalOptions}
                    onValueChange={onValueChange}
                    bonusesSystemIsOn={bonusesSystemIsOn}
                />
                <AssistanceSelection />
                <AgreementWithRules />
                <CovidOption onValueChange={onValueChange} />
            </>
        )
    }
)

export default Filling
