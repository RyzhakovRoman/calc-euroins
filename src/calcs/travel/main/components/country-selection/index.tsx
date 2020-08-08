import * as React from 'react'
import {FC, memo, useCallback, useRef, useState} from 'react'
import CalcCard from '../../../../common/components/calc-card'
import Form, {FormInstance} from 'antd/lib/form'
import Select from 'antd/lib/select'
import 'antd/lib/select/style'
import Radio from 'antd/lib/radio'
import 'antd/lib/radio/style/index'
import {COUNTRIES} from '../../constants/countries'
import {
    COMPONENT_SIZE,
    INSURANCE_SUMS,
    INSURANCE_SUMS_RUS,
    RF_ONLY_ID,
} from '../../constants'
import './index.less'
import IDS from '../../constants/ids'
import {EURO_ONLY} from '../../constants/euro-only'

interface CountrySelectionPropsInterface {
    form: FormInstance
}

const {Item} = Form,
    {Option} = Select,
    {Group} = Radio

const CountrySelection: FC<CountrySelectionPropsInterface> = memo(({form}) => {
    const selectRef = useRef<Select>(),
        [groupOfCountries, setGroupOfCountries] = useState<number>(1),
        [open, setOpen] = useState<boolean>(false),
        setCurrencyAndSum = useCallback(() => {
            const {getFieldValue, setFieldsValue} = form,
                countries = getFieldValue(IDS.COUNTRIES)
            let isEuro = false

            if (countries.includes(RF_ONLY_ID))
                return setFieldsValue({
                    [IDS.CURRENCY]: 'РУБ',
                    [IDS.INSURANCE_SUM]: INSURANCE_SUMS_RUS[0],
                })

            countries.some(countryId => {
                if (EURO_ONLY.indexOf(countryId) !== -1) {
                    isEuro = true
                    return true
                }
            })

            if (isEuro)
                setFieldsValue({
                    [IDS.CURRENCY]: 'EUR',
                    [IDS.INSURANCE_SUM]: INSURANCE_SUMS[0],
                })
            else
                setFieldsValue({
                    [IDS.CURRENCY]: 'USD',
                    [IDS.INSURANCE_SUM]: INSURANCE_SUMS[0],
                })
        }, []),
        hundleCountryGroupChange = useCallback(({target: {value}}) => {
            const {setFieldsValue} = form

            if (value === 1) setFieldsValue({[IDS.COUNTRIES]: []})

            // если Весь мир, Шенген или РФ то выставляем только их
            if (value === 255 || value === RF_ONLY_ID || value === 254)
                setFieldsValue({[IDS.COUNTRIES]: [value]})

            setGroupOfCountries(value)
            setCurrencyAndSum()
        }, []),
        handleDeselectCountry = useCallback(value => {
            if (value === 254) setGroupOfCountries(1)
            setCurrencyAndSum()
        }, []),
        handleSelect = useCallback(() => {
            selectRef.current.blur()
            setCurrencyAndSum()
        }, [selectRef]),
        handleFocus = useCallback(() => {
            setOpen(true)
        }, []),
        handleBlur = useCallback(() => {
            setOpen(false)
        }, []),
        selectedCountries = form.getFieldValue(IDS.COUNTRIES),
        selectDisabled =
            groupOfCountries === 255 || groupOfCountries === RF_ONLY_ID

    return (
        <CalcCard className={'country-selection'}>
            <h2>Страна назначения</h2>

            <Item
                name={[IDS.COUNTRIES]}
                rules={[{required: true, message: 'Выберете страну'}]}
            >
                <Select
                    ref={select => {
                        selectRef.current = select
                    }}
                    className={'country-selection__select'}
                    size={COMPONENT_SIZE}
                    open={open}
                    mode={'multiple'}
                    disabled={selectDisabled}
                    placeholder={'Введите страну'}
                    onDeselect={handleDeselectCountry}
                    onSelect={handleSelect}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    optionFilterProp={'children'}
                >
                    {COUNTRIES.map(item => (
                        <Option
                            value={item.id}
                            disabled={
                                [RF_ONLY_ID, 254, 255].includes(item.id) ||
                                (selectedCountries &&
                                    selectedCountries.length > 4 &&
                                    !(selectedCountries.indexOf(item.id) + 1))
                            }
                            key={item.id}
                        >
                            {item.text}
                        </Option>
                    ))}
                </Select>
            </Item>
            <Group
                value={groupOfCountries}
                onChange={hundleCountryGroupChange}
                className={'country-selection__radio-group'}
            >
                <Radio value={1}>Выбранные страны</Radio>
                <Radio value={254}>Страны шенгенского союза + выбранные</Radio>
                <Radio value={255}>Весь мир, исключая США и Канаду</Radio>
                <Radio value={RF_ONLY_ID}>Только РФ</Radio>
            </Group>
        </CalcCard>
    )
})

export default CountrySelection
