import * as React from 'react'
import {FC, memo} from 'react'
import {Row, Col} from 'antd/lib/grid'
import 'antd/lib/grid/style'
import Form from 'antd/lib/form'
import 'antd/lib/form/style'
import Input from 'antd/lib/input'
import 'antd/lib/input/style'
import Date from '../custom-form-components/date'
import './index.less'
import {STANDART_ITEM_RULES} from '../../../calcs/common/constants'

const {Item} = Form

interface PassportDataPropsInterface {
    namespace?: string
    showHeading?: string
    disablesSerial?: boolean
    disablesNumber?: boolean
    disabled?: boolean
}

const PassportData: FC<PassportDataPropsInterface> = memo(
    ({
        namespace,
        showHeading = true,
        disabled = false,
        disablesSerial = false,
        disablesNumber = false,
    }) => {
        let serialName: string | string[] = 'passportSerial',
            numberName: string | string[] = 'passportNumber',
            dateOfIssueName: string | string[] = 'passportDateOfIssue'

        if (namespace) {
            serialName = [namespace, serialName]
            numberName = [namespace, numberName]
            dateOfIssueName = [namespace, dateOfIssueName]
        }

        return (
            <Row gutter={{sm: 8, md: 16, xl: 24}}>
                {showHeading && (
                    <Col xs={24} sm={24}>
                        <h3>Паспортные данные</h3>
                    </Col>
                )}
                <Col>
                    <Row>
                        <Col className={'e-passport-data__serial-col'}>
                            <Item
                                name={serialName}
                                label={'Серия'}
                                rules={STANDART_ITEM_RULES}
                                required
                            >
                                <Input
                                    className={'e-passport-data__serial'}
                                    size={'large'}
                                    disabled={disabled || disablesSerial}
                                />
                            </Item>
                        </Col>
                        <Col className={'e-passport-data__number-col'}>
                            <Item
                                name={numberName}
                                label={'Номер'}
                                rules={STANDART_ITEM_RULES}
                                required
                            >
                                <Input
                                    className={'e-passport-data__number'}
                                    size={'large'}
                                    disabled={disabled || disablesNumber}
                                />
                            </Item>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Item
                        name={dateOfIssueName}
                        label={'Дата выдачи'}
                        rules={STANDART_ITEM_RULES}
                        required
                    >
                        <Date disabled={disabled} />
                    </Item>
                </Col>
            </Row>
        )
    }
)

export default PassportData
