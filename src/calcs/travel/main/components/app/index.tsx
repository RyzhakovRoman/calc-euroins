import * as React from 'react'
import {FC} from 'react'
import useUrlParams from '../../../../../common/hooks/use-url-params'
import UrlParamsInterface, {
    PaymentStatusType,
} from '../../../../common/types/url-params'
import Calculator from '../calculator'
import './index.less'
import GlobalOptionsInterface from '../../types/global-options'
import PageAfterPayment from '../../../../common/components/page-after-payment'
import QuestionAboutEuroins from '../../../../common/components/question-about-euroins'

interface AppPropsInterface {
    globalOptions: GlobalOptionsInterface
}

const App: FC<AppPropsInterface> = ({globalOptions}) => {
    const params = useUrlParams<UrlParamsInterface>(),
        {payment_status} = params

    if (payment_status === 'success' || payment_status === 'error')
        return (
            <PageAfterPayment
                params={params}
                rootNodeId={globalOptions.rootNodeId}
                successContent={<QuestionAboutEuroins params={params} />}
            />
        )

    return <Calculator globalOptions={globalOptions} />
}

export default App
