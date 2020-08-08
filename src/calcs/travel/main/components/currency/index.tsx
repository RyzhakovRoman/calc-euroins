import * as React from 'react'
import {FC, memo, useCallback} from 'react'
import Form from 'antd/lib/form'
import 'antd/lib/form/style'
import Radio from 'antd/lib/radio'
import 'antd/lib/radio/style'
import IDS from '../../constants/ids'
import {EURO_ONLY} from '../../constants/euro-only'
import {RF_ONLY_ID} from '../../constants'

const {Item} = Form,
    {Group} = Radio

interface CurrencyPropsInterface {
    onValueChange: (fieldName: string | string[]) => void
}

const Currency: FC<CurrencyPropsInterface> = memo(({onValueChange}) => {
    const handleChange = useCallback(() => {
        onValueChange(IDS.CURRENCY)
    }, [onValueChange])

    return (
        <>
            <h2>Выберете валюту</h2>

            <Item
                shouldUpdate={(prevValues, currentValues) =>
                    prevValues[IDS.COUNTRIES] !== currentValues[IDS.COUNTRIES]
                }
            >
                {({getFieldValue}) => {
                    const countries = getFieldValue(IDS.COUNTRIES),
                        russiaOnly = countries.includes(RF_ONLY_ID)
                    let onlyEuro = false

                    countries.some(countryId => {
                        if (EURO_ONLY.includes(countryId)) {
                            return (onlyEuro = true)
                        }
                    })

                    return (
                        <Item name={IDS.CURRENCY}>
                            <Group onChange={handleChange}>
                                <Radio
                                    value={'USD'}
                                    disabled={onlyEuro || russiaOnly}
                                >
                                    USD
                                </Radio>
                                <Radio value={'EUR'} disabled={russiaOnly}>
                                    EUR
                                </Radio>
                                <Radio value={'РУБ'} disabled={!russiaOnly}>
                                    РУБ
                                </Radio>
                            </Group>
                        </Item>
                    )
                }}
            </Item>
        </>
    )
})

export default Currency
