import * as React from 'react'
import {FC} from 'react'
import Form from 'antd/lib/form'
import 'antd/lib/form/style'
import Divider from 'antd/lib/divider'
import 'antd/lib/divider/style'
import CostStateType from '../../types/state/cost-state'
import {FormInstance} from 'antd/lib/form'
import GlobalOutlined from '@ant-design/icons/lib/icons/GlobalOutlined'
import IDS from '../../constants/ids'
import {COUNTRIES} from '../../constants/countries'
import './index.less'
import {OUTPUT_DATE_FORMAT} from '../../../../common/constants'
import * as moment from 'moment'
import SECOND_PROGRAMS from '../../constants/second-programs'
import divideIntegerBySpace from '../../../../../common/helpers/divide-integer-by-space'

const {Item} = Form

interface CheckPropsInterface {
    cost: CostStateType
}

const getCountryNames = ({getFieldValue}: FormInstance) => {
        const selectedCountries = getFieldValue(IDS.COUNTRIES),
            countryNames = []

        COUNTRIES.forEach(country => {
            const index = selectedCountries.indexOf(country.id)
            if (index !== -1) countryNames.push(country.text)
        })

        if (countryNames.length === 0) countryNames.push('нет выбранных стран')

        return countryNames.join(', ')
    },
    getDates = ({getFieldValue}: FormInstance) => {
        const periodStartDate = getFieldValue(IDS.PERIOD_START_DATE),
            periodStartDateEntered = !!periodStartDate,
            periodEndDate = getFieldValue(IDS.PERIOD_END_DATE),
            periodEndDateEntered = !!periodEndDate,
            isMulti = getFieldValue(IDS.MULTI),
            from = periodStartDateEntered
                ? periodStartDate.format(OUTPUT_DATE_FORMAT)
                : '-'
        let to = ''

        if (isMulti)
            to = periodStartDateEntered
                ? moment(periodStartDate)
                      .add(1, 'year')
                      .format(OUTPUT_DATE_FORMAT)
                : '-'
        else
            to = periodEndDateEntered
                ? periodEndDate.format(OUTPUT_DATE_FORMAT)
                : '-'

        return `с ${from} по ${to}`
    },
    getNamesOfSecondPrograms = ({
        getFieldValue,
        getFieldsValue,
    }: FormInstance) => {
        const selectedSports = getFieldValue(IDS.SPORTS),
            selectedSecondPrograms = getFieldsValue()[IDS.SECOND_PROGRAMS],
            secondProgramNames = []

        if (selectedSecondPrograms === undefined) return ''

        SECOND_PROGRAMS.forEach(secondProgram => {
            if (selectedSecondPrograms[secondProgram.id])
                secondProgramNames.push(secondProgram.name)
        })

        if (selectedSports.length > 0) secondProgramNames.push('Активный отдых')

        if (secondProgramNames.length === 0)
            secondProgramNames.push('нет выбранных')

        return secondProgramNames.join(', ')
    }

const Check: FC<CheckPropsInterface> = ({cost}) => {
    return (
        <Item shouldUpdate={true} noStyle>
            {(form: FormInstance) => {
                const {getFieldValue} = form,
                    countryNames = getCountryNames(form),
                    dates = getDates(form),
                    numberOfInsured = getFieldValue(IDS.INSUREDS).length,
                    insuranceSum = getFieldValue(IDS.INSURANCE_SUM),
                    cover = `${divideIntegerBySpace(
                        insuranceSum
                    )} ${getFieldValue(IDS.CURRENCY)}`,
                    secondProgramNames = getNamesOfSecondPrograms(form)

                return (
                    <>
                        <h2>Ваш полис</h2>
                        <Divider />
                        <h3>
                            <GlobalOutlined className={'check__icon'} />{' '}
                            {countryNames}
                        </h3>
                        <p>
                            Полис действует: <b>{dates}</b>
                        </p>
                        <p>
                            Количество человек: <b>{numberOfInsured}</b>
                        </p>
                        <p>
                            Покрытие: <b>{cover}</b>
                        </p>
                        <p>
                            Дополнительные опции: <b>{secondProgramNames}</b>
                        </p>
                        <Divider />
                    </>
                )
            }}
        </Item>
    )
}

export default Check
