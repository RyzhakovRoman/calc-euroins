import * as React from 'react'
import {FC, memo} from 'react'
import CalcCard from '../../../../common/components/calc-card'
import Form from 'antd/lib/form'
import 'antd/lib/form/style'
import Checkbox from 'antd/lib/checkbox'
import 'antd/lib/checkbox/style'
import {URL_USER_AGREEMENT} from '../../constants'
import {
    URL_AGREEMENT_OF_PERSONAL_DATA,
    URL_POLICY_PERSONAL_DATA,
} from '../../../../common/constants/doc-urls'
import IDS from '../../constants/ids'
import requiredTrueCheckboxValidator from '../../../../../common/helpers/validators/required-true-checkbox'

const {Item} = Form

const AgreementWithProtectionPolicy: FC = memo(() => {
    return (
        <CalcCard>
            <h2>Подтверждение пользовательского соглашения</h2>

            <Item
                name={IDS.AGREEMENT_WITH_PROTECTION_POLICY}
                valuePropName={'checked'}
                rules={[
                    {
                        message: 'Поставьте отметку о согласии',
                        validator: requiredTrueCheckboxValidator,
                    },
                ]}
                required
            >
                <Checkbox>
                    <span>
                        Я согласен с текстом{' '}
                        <a
                            className={'e-link_underline'}
                            href={URL_USER_AGREEMENT}
                            target={'_blank'}
                        >
                            Пользовательского соглашения
                        </a>
                        . Я согласен на обработку{' '}
                        <a
                            className={'e-link_underline'}
                            href={URL_AGREEMENT_OF_PERSONAL_DATA}
                            target={'_blank'}
                        >
                            Персональных данных (ПД)
                        </a>{' '}
                        и ознакомился с{' '}
                        <a
                            className={'e-link_underline'}
                            href={URL_POLICY_PERSONAL_DATA}
                            target={'_blank'}
                        >
                            Политикой защиты и обработки ПД
                        </a>
                        .
                    </span>
                </Checkbox>
            </Item>
        </CalcCard>
    )
})

export default AgreementWithProtectionPolicy
