import * as React from 'react'
import {FC, memo} from 'react'
import Form from 'antd/lib/form'
import 'antd/lib/form/style'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import CalcCard from '../../../../common/components/calc-card'
import SECOND_PROGRAMS, {
    SECOND_PROGRAMS_RUS,
} from '../../constants/second-programs'
import SecondProgram from '../second-program'
import IDS from '../../constants/ids'
import {RF_ONLY_ID} from '../../constants'

interface SecondProgramsPropsInterface {
    onValueChange: (fieldName: string | string[]) => void
}

const {Item} = Form

const SecondPrograms: FC<SecondProgramsPropsInterface> = memo(
    ({onValueChange}) => {
        return (
            <CalcCard>
                <h2>Рекомендуем добавить опции</h2>

                <Row gutter={16}>
                    <Item
                        shouldUpdate={(prevValues, currentValues) =>
                            prevValues[IDS.COUNTRIES] !==
                            currentValues[IDS.COUNTRIES]
                        }
                        noStyle
                    >
                        {({getFieldValue}) => {
                            const selectedCountries = getFieldValue(
                                IDS.COUNTRIES
                            )

                            if (selectedCountries.includes(RF_ONLY_ID))
                                return SECOND_PROGRAMS_RUS.map(program => (
                                    <Col md={24} lg={8} key={program.id}>
                                        <SecondProgram
                                            {...program}
                                            onValueChange={onValueChange}
                                        />
                                    </Col>
                                ))
                            else
                                return SECOND_PROGRAMS.map(program => (
                                    <Col md={24} lg={8} key={program.id}>
                                        <SecondProgram
                                            {...program}
                                            onValueChange={onValueChange}
                                        />
                                    </Col>
                                ))
                        }}
                    </Item>
                </Row>
            </CalcCard>
        )
    }
)

export default SecondPrograms
