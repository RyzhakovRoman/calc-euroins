import * as React from 'react'
import {FC} from 'react'
import Form from 'antd/lib/form'
import 'antd/lib/form/style'
import Checkbox from 'antd/lib/checkbox'
import 'antd/lib/checkbox/style'
import CalcCard from '../../../../common/components/calc-card'
import IDS from '../../constants/ids'
import {URL_PROGRAM, URL_RULES} from '../../constants'
import './index.less'
import requiredTrueCheckboxValidator from '../../../../../common/helpers/validators/required-true-checkbox'

const {Item} = Form

const AgreementWithRules: FC = () => {
    return (
        <CalcCard>
            <h2>Подтверждение правил</h2>

            <Item
                name={IDS.AGREEMENT_WITH_RULES}
                rules={[
                    {
                        message:
                            'Поставьте отметку о согласии с правилами и программой',
                        validator: requiredTrueCheckboxValidator,
                    },
                ]}
                valuePropName={'checked'}
            >
                <Checkbox className={'e-awr'}>
                    <span>*</span> С{' '}
                    <a
                        className={'e-link_underline'}
                        href={URL_RULES}
                        target={'_blank'}
                    >
                        правилами
                    </a>{' '}
                    и{' '}
                    <a
                        className={'e-link_underline'}
                        href={URL_PROGRAM}
                        target={'_blank'}
                    >
                        программой страхования
                    </a>{' '}
                    ознакомлен и согласен их исполнять.
                </Checkbox>
            </Item>
        </CalcCard>
    )
}

export default AgreementWithRules
