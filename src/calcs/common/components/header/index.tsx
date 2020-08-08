import * as React from 'react'
import {FC, memo} from 'react'
import Steps from 'antd/lib/steps'
import 'antd/lib/steps/style'
import './index.less'

interface CalcStepInterface {
    name: string
}

interface HeaderPropsInterface {
    currentStep: number
    calcSteps: CalcStepInterface[]
}

const {Step} = Steps

const Header: FC<HeaderPropsInterface> = memo(({currentStep, calcSteps}) => {
    return (
        <div id={'calc-header'}>
            <Steps current={currentStep} className={'calc-header__steps'}>
                {calcSteps.map((step, i) => (
                    <Step
                        className={'calc-header__step'}
                        title={step.name}
                        key={i}
                    />
                ))}
            </Steps>
        </div>
    )
})

export default Header
