import * as React from 'react'
import {FC, memo} from 'react'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import CalcCard from '../../../../common/components/calc-card'
import Currency from '../currency'
import Sums from '../sums'
import GlobalOptionsInterface from '../../types/global-options'
import IDS from '../../constants/ids'

interface CurrencyAndSumsPropsInterface {
    onValueChange: (fieldName: string | string[]) => void
}

const CurrencyAndSums: FC<CurrencyAndSumsPropsInterface> = memo(
    ({onValueChange}) => {
        return (
            <CalcCard>
                <Row gutter={16}>
                    <Col md={12} lg={10}>
                        <Currency onValueChange={onValueChange} />
                    </Col>
                    <Col md={12}>
                        <Sums onValueChange={onValueChange} />
                    </Col>
                </Row>
            </CalcCard>
        )
    }
)

export default CurrencyAndSums
