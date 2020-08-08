import * as React from 'react'
import {Moment} from 'moment'
import Input from 'antd/lib/input'
import 'antd/lib/input/style'
import * as InputMask from 'react-input-mask'
import './index.less'
import * as moment from 'moment'

// Если меняется маска то меняем и формат!
const dateFormat: string = 'DD.MM.YYYY',
    mask: string = '99.99.9999'

interface DatePropsInterface {
    id?: any
    size: 'small' | 'default'
    value?: Moment | undefined
    onChange?: (date: Moment) => void
    onBlur?: () => void
    disabled?: boolean
}

interface DateStateInterface {
    value: string
}

export default class Date extends React.Component<
    DatePropsInterface,
    DateStateInterface
> {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value ? props.value.format(dateFormat) : '__.__.____',
        }
    }

    static defaultProps = {
        size: 'large',
        disabled: false,
    }

    static getDerivedStateFromProps({value}, state) {
        if (value && state.value !== value.format(dateFormat)) {
            return {
                value: value.format(dateFormat),
            }
        } else if (
            state.value.indexOf('_') === -1 &&
            (value === null || value === undefined)
        ) {
            return {
                value: '',
            }
        } else {
            return null
        }
    }

    changeValue = e => {
        if (e.type === 'change') {
            const {onChange} = this.props

            if (moment(e.target.value, dateFormat, true).isValid())
                onChange(moment(e.target.value, dateFormat))
            else onChange(null)

            this.setState({value: e.target.value})
        }
    }

    render() {
        const {disabled, onBlur} = this.props,
            {value} = this.state

        return (
            <InputMask
                mask={mask}
                value={value}
                onChange={this.changeValue}
                disabled={disabled}
                onBlur={onBlur}
            >
                {props => (
                    <Input
                        {...props}
                        size={this.props.size}
                        className='e-date-mask'
                        disabled={disabled}
                    />
                )}
            </InputMask>
        )
    }
}
