import * as React from 'react'
import {FC} from 'react'
import './index.less'

interface CalcCardPropsInterface {
    className?: string
}

const CalcCard: FC<CalcCardPropsInterface> = ({className = '', children}) => (
    <div className={`calc-card ${className}`}>{children}</div>
)

export default CalcCard
