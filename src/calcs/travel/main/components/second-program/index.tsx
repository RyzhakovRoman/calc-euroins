import * as React from 'react'
import {FC, memo} from 'react'
import Form from 'antd/lib/form'
import 'antd/lib/form/style'
import Card from 'antd/lib/card'
import 'antd/lib/card/style'
import Switch from 'antd/lib/switch'
import 'antd/lib/switch/style'
import Radio from 'antd/lib/radio'
import 'antd/lib/radio/style'
import './index.less'
import IDS from '../../constants/ids'
import {useCallback} from 'react'
import divideIntegerBySpace from '../../../../../common/helpers/divide-integer-by-space'

const {Item} = Form,
    {Group} = Radio

interface SecondProgramPropsInterface {
    id: string
    name: string
    sums: number[]
    onValueChange: (fieldName: string | string[]) => void
}

const SecondProgram: FC<SecondProgramPropsInterface> = memo(
    ({id, name, sums, onValueChange}) => {
        const handleChange = useCallback(() => {
            onValueChange([IDS.SECOND_PROGRAMS, id])
        }, [onValueChange])

        return (
            <Card
                className={'e-second-program'}
                title={
                    <span className={'e-second-program__title'}>
                        <img
                            className={'e-second-program__icon'}
                            src={`https://euro-ins.ru/front/dist/img/calc/icon/secondPrograms/${id}.png`}
                            alt={'Иконка риска'}
                        />
                        <br />
                        {name}
                    </span>
                }
                extra={
                    <Item shouldUpdate={true}>
                        {({getFieldValue, setFieldsValue}) => {
                            const checked =
                                    getFieldValue([IDS.SECOND_PROGRAMS, id]) !==
                                    undefined,
                                handleChange = checked => {
                                    let value

                                    if (checked) value = sums[0]

                                    setFieldsValue({
                                        [IDS.SECOND_PROGRAMS]: {[id]: value},
                                    })
                                    onValueChange([IDS.SECOND_PROGRAMS, id])
                                }

                            return (
                                <Switch
                                    checked={checked}
                                    onChange={handleChange}
                                />
                            )
                        }}
                    </Item>
                }
            >
                <Item
                    name={[IDS.SECOND_PROGRAMS, id]}
                    className={'item_without-margin'}
                >
                    <Group onChange={handleChange}>
                        {sums.map(sum => (
                            <Radio value={sum} key={sum}>
                                {divideIntegerBySpace(sum)}
                            </Radio>
                        ))}
                    </Group>
                </Item>
            </Card>
        )
    }
)

export default SecondProgram
