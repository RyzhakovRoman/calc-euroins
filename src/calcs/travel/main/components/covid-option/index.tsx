import * as React from 'react'
import {FC, memo, useCallback} from 'react'
import CalcCard from '../../../../common/components/calc-card'
import Alert from 'antd/lib/alert'
import 'antd/lib/alert/style'
import Radio from 'antd/lib/radio'
import 'antd/lib/radio/style'
import Form from 'antd/lib/form'
import 'antd/lib/form/style'
import IDS from '../../constants/ids'
import './index.less'
import {RF_ONLY_ID} from '../../constants'

const {Group, Button} = Radio,
    {Item} = Form

interface CovidOptionPropsInterface {
    onValueChange: (fieldName: string[]) => void
}

const CovidOption: FC<CovidOptionPropsInterface> = memo(({onValueChange}) => {
    const handleChange = () => {
        onValueChange([IDS.OPTIONS, IDS.COVID])
    }

    return (
        <Item
            shouldUpdate={(prevValues, currentValues) =>
                prevValues[IDS.COUNTRIES] !== currentValues[IDS.COUNTRIES]
            }
            noStyle
        >
            {({getFieldValue}) => {
                const selectedCountries = getFieldValue(IDS.COUNTRIES),
                    russiaOnly = selectedCountries.includes(RF_ONLY_ID)

                if (russiaOnly) return

                return (
                    <CalcCard>
                        <h2>Страхование от covid-19</h2>
                        <Alert
                            type={'warning'}
                            message={
                                'Без данной опции документы в посольстве могут не принять. При включении этой опции она будет указана в вашем полисе.'
                            }
                            showIcon
                        />
                        <Item
                            className={'e-covid-option__item'}
                            name={[IDS.OPTIONS, IDS.COVID]}
                            label={'Включить опцию страхование от covid-19?'}
                        >
                            <Group
                                buttonStyle={'solid'}
                                onChange={handleChange}
                            >
                                <Button value={false}>Нет</Button>
                                <Button value={true}>Да</Button>
                            </Group>
                        </Item>
                    </CalcCard>
                )
            }}
        </Item>
    )
})
export default CovidOption
