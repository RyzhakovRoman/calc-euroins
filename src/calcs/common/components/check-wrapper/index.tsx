import * as React from 'react'
import {FC, useCallback, useEffect, useMemo, useState} from 'react'
import Affix from 'antd/lib/affix'
import 'antd/lib/affix/style'
import './index.less'

interface CheckWrapperPropsInterface {
    rootNodeId: string
    currentStep: number
}

interface AffixStateInterface {
    affixed: boolean
}

let fixedResetPoint = 0

const CheckWrapper: FC<CheckWrapperPropsInterface> = ({
    rootNodeId,
    currentStep,
    children,
}) => {
    const screenIsSmall = window.innerWidth < 768,
        rootNode = useMemo(() => document.getElementById(rootNodeId), []),
        [affix, setAffix] = useState<AffixStateInterface>({affixed: true}),
        setFixedResetPoint = useCallback(() => {
            const // Последний-нижний пиксель калькулятора
                calcEndPX = rootNode.offsetTop + rootNode.clientHeight,
                // Высота чека
                checkHeight = document.getElementsByClassName('calc-check')[0]
                    .clientHeight
            // Точка сброса фиксированной позиции
            fixedResetPoint = calcEndPX - checkHeight
        }, []),
        handleScroll = useCallback(() => {
            // Если скрол прошел точку сброса, то стам соответствующий стейт
            if (window.scrollY > fixedResetPoint) setAffix({affixed: false})
            else
                setAffix(affix => {
                    if (!affix.affixed) return {affixed: true}
                    else return affix
                })
        }, [])

    useEffect(() => {
        if (screenIsSmall) return
        setFixedResetPoint()
        window.addEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setFixedResetPoint()
    }, [currentStep])

    // Если экран маленький, то рендерим обычно
    if (screenIsSmall) return <div className={'calc-check'}>{children}</div>

    // Если экран большой,
    // то рендерим с функционалом фиксации при прокрутке
    return (
        <Affix className={affix.affixed ? '' : 'absolute-bottom'}>
            <div className={'calc-check'}>{children}</div>
        </Affix>
    )
}

export default CheckWrapper
