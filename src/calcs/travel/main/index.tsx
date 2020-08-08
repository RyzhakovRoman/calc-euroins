import * as React from 'react'
import * as ReactDOM from 'react-dom'
import GlobalOptionsInterface from './types/global-options'
import ConfigProvider from 'antd/lib/config-provider'
import * as moment from 'moment'
import ru_RU from 'antd/es/locale/ru_RU'
import App from './components/app'
import mergeDeep from '../../../common/helpers/merge-deep'
import defaultGlobalOptions from './constants/global-options'

declare const window
declare const ENV_IS_DEV: boolean

window.TravelCalculator = class TravelCalculator {
    constructor(nodeId: string, initOptions: GlobalOptionsInterface) {
        const globalOptions = mergeDeep({}, initOptions, defaultGlobalOptions)

        ReactDOM.render(
            <ConfigProvider locale={ru_RU}>
                <App globalOptions={{...globalOptions, rootNodeId: nodeId}} />
            </ConfigProvider>,
            document.getElementById(nodeId)
        )
    }
}
