import * as React from 'react'
import {FC, memo} from 'react'
import Form from 'antd/lib/form'
import 'antd/lib/form/style'
import Radio from 'antd/lib/radio'
import 'antd/lib/radio/style'
import IDS from '../../constants/ids'
import {INSURANCE_SUMS, INSURANCE_SUMS_RUS, RF_ONLY_ID} from '../../constants'
import {useCallback} from 'react'
import divideIntegerBySpace from '../../../../../common/helpers/divide-integer-by-space'

const {Item} = Form,
    {Group} = Radio

interface SumsPropsInterface {
    onValueChange: (fieldName: string | string[]) => void
}

const Sums: FC<SumsPropsInterface> = memo(({onValueChange}) => {
    const handleChange = useCallback(() => {
        onValueChange(IDS.INSURANCE_SUM)
    }, [onValueChange])

    return (
        <>
            <h2>Выберете страховую сумму</h2>

            <Item
                shouldUpdate={(prevValues, currentValues) =>
                    prevValues[IDS.COUNTRIES] !== currentValues[IDS.COUNTRIES]
                }
            >
                {({getFieldValue}) => {
                    const selectedCountries = getFieldValue(IDS.COUNTRIES),
                        arrayOfSums = selectedCountries.includes(RF_ONLY_ID)
                            ? INSURANCE_SUMS_RUS
                            : INSURANCE_SUMS

                    return (
                        <Item name={IDS.INSURANCE_SUM}>
                            <Group onChange={handleChange}>
                                {arrayOfSums.map(sum => (
                                    <Radio value={sum} key={sum}>
                                        {divideIntegerBySpace(sum)}
                                    </Radio>
                                ))}
                            </Group>
                        </Item>
                    )
                }}
            </Item>
        </>
    )
})

export default Sums
