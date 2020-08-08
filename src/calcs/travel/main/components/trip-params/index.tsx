import * as React from 'react'
import {FC} from 'react'
import Input from 'antd/lib/input'
import Step from '../../../../common/components/step'
import Form, {FormInstance} from 'antd/lib/form'
import CountrySelection from '../country-selection'
import TripType from '../trip-type'
import TripDates from '../trip-dates'
import InsuredBirthdays from '../insured-birthdays'

interface TripParamsPropsInterface {
    form: FormInstance
}

const {Item} = Form

const TripParams: FC<TripParamsPropsInterface> = ({form}) => {
    return (
        <>
            <CountrySelection form={form} />
            <TripType form={form} />
            <TripDates />
            <InsuredBirthdays form={form} />
        </>
    )
}

export default TripParams
