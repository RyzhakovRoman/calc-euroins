import * as React from 'react'
import {FC, memo, useCallback, useEffect, useMemo, useState} from 'react'
import GlobalOptionsInterface, {
    BonusesInterface,
} from '../../../travel/main/types/global-options'
import {numberToStringForBonuses} from '../../../../common/helpers/number-to-string'
import Form, {FormInstance} from 'antd/lib/form'
import 'antd/lib/form/style'
import IDS from '../../../travel/main/constants/ids'
import Slider from 'antd/lib/slider'
import 'antd/lib/slider/style'
import './index.less'

const {Item} = Form

interface BonusesPropsInterface {
    form: FormInstance
    bonuses: BonusesInterface
    cost: number
    percent: number
    onAfterChange: (fieldName: string | string[]) => void
}

const NO_BONUSES = (
    <p>
        Если Вы еще не получили свои баллы, Вы можете получить их на странице{' '}
        <b>
            <a href='#'>Активация приветственных баллов</a>
        </b>
    </p>
)

const Bonuses: FC<BonusesPropsInterface> = memo(
    ({form, bonuses, cost, percent, onAfterChange}) => {
        const [value, setValue] = useState<number>(0),
            zeroBonuses = +bonuses.count === 0,
            /*
                 Если бонусов больше чем доступно для покрытия части цены,
                 то ограничитель это часть цены, иначе баллы
             */
            maxBonuses = useMemo(() => {
                // Часть премии, которую можно покрыть баллами
                const costPercentsPart = (cost / 100) * percent

                return Math.floor(
                    bonuses.count > costPercentsPart
                        ? costPercentsPart
                        : bonuses.count
                )
            }, [cost, bonuses, percent]),
            marks = useMemo(
                () => ({
                    0: '0',
                    [maxBonuses]: maxBonuses,
                }),
                [maxBonuses]
            ),
            handleAfterChange = useCallback(value => {
                form.setFieldsValue({[IDS.BONUSES]: value})
            }, [])

        useEffect(() => {
            if (Object.keys(marks).length > 1) {
                const selectedBonuses = form.getFieldValue(IDS.BONUSES)
                if (maxBonuses <= selectedBonuses) {
                    form.setFieldsValue({[IDS.BONUSES]: maxBonuses})
                    setValue(maxBonuses)
                    return
                }

                setValue(selectedBonuses)
            }
        }, [marks, maxBonuses])

        return (
            <>
                <Item name={IDS.BONUSES} className={'hide'}>
                    <input />
                </Item>
                <p>
                    В ЕВРОИНС действует бонусная программа (1 балл = 1 рубль){' '}
                    <b>
                        <a href='#'>Ознакомится подробнее</a>
                    </b>
                </p>
                <p>
                    У Вас{' '}
                    <b>
                        {bonuses.count}{' '}
                        {numberToStringForBonuses(bonuses.count)}
                    </b>
                    , баллами можно оплатить до <b>{percent}%</b> страховой
                    премии.
                </p>
                {zeroBonuses ? (
                    NO_BONUSES
                ) : (
                    <Slider
                        className={'bonuses-slider'}
                        min={0}
                        max={maxBonuses}
                        marks={marks}
                        onChange={setValue}
                        onAfterChange={handleAfterChange}
                        value={value}
                    />
                )}
            </>
        )
    }
)

export default Bonuses

// <Item label={'test'}>
//     <Slider
// className={'bonuses-slider'}
// min={0}
// max={maxBonuses}
// marks={marks}
// onAfterChange={async e => {
//     handleAfterChange(e)
//     return e
// }}
// // onChange={e => {
// //     console.log('onChange ', e)
// // }}
// // defaultValue={bonusesSelected}
// />
// </Item>
