import * as React from 'react'
import {FC, Suspense} from 'react'
import Promocode from '../promocode'
import siteIsOwnedByEuroins from '../../../../../common/helpers/site-is-owned-by-euroins'
import {FormInstance} from 'antd/lib/form'
import GlobalOptionsInterface from '../../types/global-options'

interface PromocodeOrBonusesWrapperPropsInterface {
    form: FormInstance
    cost: number
    globalOptions: GlobalOptionsInterface
    onValueChange: (fieldName: string | string[]) => void
    bonusesSystemIsOn: boolean
}

// const PromocodeOrBonuses = React.lazy(() =>
//     import(
//         /* webpackChunkName: "PromocodeOrBonuses" */ '../promocode-or-bonuses/index'
//     )
// )

const PromocodeOrBonusesWrapper: FC<PromocodeOrBonusesWrapperPropsInterface> = ({
    form,
    cost,
    globalOptions,
    onValueChange,
    bonusesSystemIsOn,
}) => {
    // Данный функционал только для сайтов ЕВРОИНС
    // if (!siteIsOwnedByEuroins()) return

    // todo - хорошо потестить с бонусами

    // if (bonusesSystemIsOn)
    //     return (
    //         <Suspense fallback={'Загрузка компонента бонусов и промокодов...'}>
    //             <PromocodeOrBonuses
    //                 cost={cost}
    //                 globalOptions={globalOptions}
    //                 onValueChange={onValueChange}
    //             />
    //         </Suspense>
    //     )
     return <Promocode form={form} onValueChange={onValueChange} />
}

export default PromocodeOrBonusesWrapper
