import * as React from 'react'
import {FC, SyntheticEvent, useCallback, useEffect} from 'react'
import {Row, Col} from 'antd/lib/grid'
import 'antd/lib/grid/style'
import Button from 'antd/lib/button'
import 'antd/lib/button/style'
import ArrowLeftOutlined from '@ant-design/icons/lib/icons/ArrowLeftOutlined'
import ArrowRightOutlined from '@ant-design/icons/lib/icons/ArrowRightOutlined'
import {COMPONENT_SIZE} from '../../constants'
import './index.less'

interface ControlBlockPropsInterface {
    currentStep: number
    onNextClick: (e) => void
    onPrevClick: () => void
    nextDisabled: boolean
}
const headerNodeId = 'calc-header'
let firstRender = true

const nextText = ['Рассчитать', 'Оформить', 'Проверить телефон', 'Оплатить']

const ControlBlock: FC<ControlBlockPropsInterface> = ({
    currentStep,
    onPrevClick,
    onNextClick,
    nextDisabled,
}) => {
    useEffect(() => {
        if (firstRender) {
            firstRender = !firstRender
            return
        }

        const headerNode = document.getElementById(headerNodeId)

        if (headerNode.scrollIntoView) {
            headerNode.scrollIntoView({behavior: 'smooth'})
        } else {
            window.location.hash = ''
            window.location.hash = `#${headerNodeId}`
        }
    }, [currentStep])

    return (
        <Row gutter={{sm: 8, md: 16, xl: 24}}>
            <Col sm={12}>
                {currentStep > 0 ? (
                    <Button
                        className={'e-control-block__button'}
                        icon={<ArrowLeftOutlined />}
                        size={COMPONENT_SIZE}
                        onClick={onPrevClick}
                    >
                        Назад
                    </Button>
                ) : null}
            </Col>
            <Col sm={12}>
                <Button
                    className={'e-control-block__button'}
                    type={'primary'}
                    size={COMPONENT_SIZE}
                    onClick={onNextClick}
                    disabled={nextDisabled}
                >
                    {nextText[currentStep]} <ArrowRightOutlined />
                </Button>
            </Col>
        </Row>
    )
}

export default ControlBlock
