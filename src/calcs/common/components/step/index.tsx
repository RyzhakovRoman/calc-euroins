import * as React from 'react'
import {FC} from 'react'
import './index.less'

interface StepPropsInterface {
    hidden?: boolean
}

const Step: FC<StepPropsInterface> = ({hidden = false, children}) => {
    return <div className={hidden ? 'hidden' : null}>{children}</div>
}

export default Step
