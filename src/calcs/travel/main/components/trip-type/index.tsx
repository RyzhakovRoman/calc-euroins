import * as React from 'react'
import {FC, memo, useCallback} from 'react'
import CalcCard from '../../../../common/components/calc-card'
import Form, {FormInstance} from 'antd/lib/form'
import Radio from 'antd/lib/radio'
import IDS from '../../constants/ids'
import {POSSIBLE_PERIODS_MULTI} from '../../constants'

interface TripTypePropsInterface {
    form: FormInstance
}

const {Item} = Form,
    {Group} = Radio

const TripType: FC<TripTypePropsInterface> = memo(({form}) => {
    const handleMultiChange = useCallback(() => {
            form.setFieldsValue({[IDS.PERIOD_MULTI]: null})
        }, []),
        handlePeriodMultiChange = useCallback(() => {
            form.setFieldsValue({[IDS.MULTI]: true})
        }, [])

    return (
        <CalcCard>
            <h2>Тип страховки</h2>

            <Item name={IDS.MULTI}>
                <Group onChange={handleMultiChange}>
                    <Radio value={false}>Одна поездка</Radio>
                </Group>
            </Item>

            <div>
                <p>
                    Многократные поездки в течение года.
                    <br />
                    Выберите количество застрахованных дней:
                </p>
            </div>
            <Item name={IDS.PERIOD_MULTI}>
                <Group onChange={handlePeriodMultiChange}>
                    {POSSIBLE_PERIODS_MULTI.map(days => (
                        <Radio value={days} key={days}>
                            {days} из 365 дн.
                        </Radio>
                    ))}
                </Group>
            </Item>
        </CalcCard>
    )
})

export default TripType
