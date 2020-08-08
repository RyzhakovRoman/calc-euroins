import * as React from 'react'
import {FC, memo, useCallback} from 'react'
import './index.less'
import LoadingOutlined from '@ant-design/icons/lib/icons/LoadingOutlined'
import {FormInstance} from 'antd/lib/form'
import Form from 'antd/lib/form'
import {SCREEN_IS_SMALL} from '../../constants'
import CheckCostForSmallScreens from './check-cost-for-small-screens'

const {Item} = Form,
    ID_PROMOCODE_OR_BONUSES = 'promocodeOrBonuses',
    ID_BONUSES = 'bonuses'

interface CheckCostInterface {
    currentStep: number
    cost: number
    defaultCost: string
    loadingCost: boolean
    bonusesSystemIsOn: boolean
    rootNodeId: string
    onPrevStepClick: () => void
}

const CheckCost: FC<CheckCostInterface> = memo(
    ({
        currentStep,
        cost,
        defaultCost,
        loadingCost,
        rootNodeId,
        bonusesSystemIsOn,
        onPrevStepClick,
    }) => {
        const getCostWithBonuses = useCallback(
                ({getFieldValue}: FormInstance) => {
                    if (loadingCost)
                        return (
                            <LoadingOutlined
                                className={'e-check-cost__loading'}
                            />
                        )

                    /*
                        Если система баллов включена и
                        цена рассчитана и
                        в калькуляторе выбраны баллы а не промокод -
                        вычитаем из цены баллы
                     */
                    const bonusesSelected =
                        getFieldValue(ID_PROMOCODE_OR_BONUSES) === 'bonuses'

                    if (bonusesSystemIsOn && cost !== 0 && bonusesSelected) {
                        const bonuses = getFieldValue(ID_BONUSES),
                            costWithBonuses = cost - bonuses

                        return (
                            <span>
                                {Math.floor(costWithBonuses * 100) / 100} руб.
                            </span>
                        )
                    }

                    /*
                    Просто выводим стоимость, если система баллов не включена
                 */
                    return <span>{cost || defaultCost} руб.</span>
                },
                [cost, loadingCost, bonusesSystemIsOn]
            ),
            getCostWithoutBonuses = useCallback(
                ({getFieldValue}: FormInstance) => {
                    const bonusesSelected =
                            getFieldValue(ID_PROMOCODE_OR_BONUSES) ===
                            'bonuses',
                        bonuses = getFieldValue(ID_BONUSES)

                    if (
                        bonusesSystemIsOn &&
                        cost !== 0 &&
                        bonusesSelected &&
                        bonuses !== 0
                    ) {
                        return (
                            <p className={'e-cost-without-bonuses'}>
                                <span
                                    className={
                                        'e-cost-without-bonuses__canceled'
                                    }
                                >
                                    {cost} руб.
                                </span>{' '}
                                <span
                                    className={'e-cost-without-bonuses__text'}
                                >
                                    без учета баллов
                                </span>
                            </p>
                        )
                    }

                    return null
                },
                [cost, bonusesSystemIsOn]
            )

        return (
            <Item shouldUpdate={true} noStyle>
                {(form: FormInstance) => {
                    const costWithBonuses = getCostWithBonuses(form),
                        costWithoutBonuses = getCostWithoutBonuses(form)

                    if (SCREEN_IS_SMALL)
                        return (
                            <CheckCostForSmallScreens
                                currentStep={currentStep}
                                costWithBonuses={costWithBonuses}
                                costWithoutBonuses={costWithoutBonuses}
                                offsetBottom={10}
                                affixed={false}
                                rootNodeId={rootNodeId}
                                onAffixStateChange={state => {}}
                                onPrevStepClick={() => {}}
                            />
                        )

                    return (
                        <>
                            <p className={'e-check-cost__total-cost-label'}>
                                Общая стоимость страховки:
                            </p>
                            <p className={'e-check-cost'}>{costWithBonuses}</p>
                            {costWithoutBonuses}
                        </>
                    )
                }}
            </Item>
        )
    }
)

export default CheckCost
