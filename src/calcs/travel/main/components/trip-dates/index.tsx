import * as React from 'react'
import {FC} from 'react'
import Form from 'antd/lib/form'
import CalcCard from '../../../../common/components/calc-card'
import {FormInstance} from 'antd/lib/form'
import IDS from '../../constants/ids'
import SingleTrip from '../single-trip'
import {Moment} from 'moment'
import {MIN_START_DATE} from '../../constants'
import './index.less'
import MultipleTrip from '../multiple-trip'

interface TripDatesPropsInterface {
    // form: FormInstance
    minStartDate?: Moment
}

const {Item} = Form

const TripDates: FC<TripDatesPropsInterface> = ({
    minStartDate = MIN_START_DATE,
}) => {
    return (
        <CalcCard>
            <Item
                className={'trip-dates__item-wrapper'}
                wrapperCol={{sm: 24}}
                shouldUpdate={(prevValues, currentValues) =>
                    prevValues[IDS.MULTI] !== currentValues[IDS.MULTI]
                }
            >
                {(form: FormInstance) => {
                    const isMulti = form.getFieldValue(IDS.MULTI)

                    return isMulti ? (
                        <MultipleTrip form={form} minStartDate={minStartDate} />
                    ) : (
                        <SingleTrip form={form} minStartDate={minStartDate} />
                    )
                }}
            </Item>
        </CalcCard>
    )
}

export default TripDates
