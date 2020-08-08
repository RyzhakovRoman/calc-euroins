import * as React from 'react'
import {DOMElement, FC, ReactNode, useEffect, useState} from 'react'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import Button from 'antd/lib/button'
import 'antd/lib/button/style'
import Affix from 'antd/lib/affix'
import 'antd/lib/affix/style'
import './index.less'

interface CheckCostForSmallScreensPropsInterface {
    currentStep: number
    costWithBonuses: ReactNode
    costWithoutBonuses: ReactNode
    rootNodeId: string
    offsetBottom?: number
    affixed?: boolean
    onAffixStateChange: (state: boolean) => void
    onPrevStepClick: () => void
}

type OffsetBottomStateType = number | null

const fullScreenCalc = rootNode => {
    const clientRect = rootNode.getBoundingClientRect()

    return (
        window.scrollY > rootNode.offsetTop &&
        window.scrollY < rootNode.offsetTop + clientRect.height
    )
}

const CheckCostForSmallScreens: FC<CheckCostForSmallScreensPropsInterface> = ({
    currentStep,
    costWithBonuses,
    costWithoutBonuses,
    rootNodeId,
    // offsetBottom,
    // affixed,
    onAffixStateChange,
    onPrevStepClick,
}) => {
    const rootNode: any = document.getElementById(rootNodeId),
        [offsetBottom, setOffsetBottom] = useState<OffsetBottomStateType>(
            fullScreenCalc(rootNode) ? 0 : undefined
        ),
        [affixed, setAffixed] = useState<boolean>(false),
        [affixHidden, setAffixHidden] = useState<boolean>(true)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const offset = fullScreenCalc(rootNode) ? 0 : undefined
            setOffsetBottom(offset)

            if (!fullScreenCalc(rootNode)) setAffixHidden(true)
            else setAffixHidden(false)
        })
    }, [])

    return (
        <Affix
            style={{display: affixHidden ? 'none' : 'block'}}
            offsetBottom={offsetBottom}
            className={`e-ccfss ${affixed ? ' e-ccfss_affixed' : ''}`}
            onChange={setAffixed}
        >
            <Row align={'middle'}>
                <Col sm={8} xs={8} className={'e-ccfss__prev-col'}>
                    {currentStep > 0 && offsetBottom === 0 && (
                        <Button type={'primary'} onClick={onPrevStepClick}>
                            Назад
                        </Button>
                    )}
                </Col>
                <Col sm={16} xs={16} className={'e-ccfss__cost-col'}>
                    <p className={'e-ccfss__cost'}>
                        Общая стоимость страховки:
                    </p>
                    {costWithBonuses}
                    <div
                        style={{
                            display: affixed ? 'none' : 'block',
                        }}
                    >
                        {costWithoutBonuses}
                    </div>
                </Col>
            </Row>
        </Affix>
    )
}

export default CheckCostForSmallScreens
