import * as React from 'react'
import {Component} from 'react'
import Input from 'antd/lib/input'
import 'antd/lib/input/style'
import * as InputMask from 'react-input-mask'

interface PhonePropsInterface {
    size?: string
    disabled?: boolean
    onChange?: (e: any) => () => void
}

interface PhoneStateInterface {
    value: string
}

class Phone extends Component<PhonePropsInterface, PhoneStateInterface> {
    constructor(props) {
        super(props)

        this.state = {
            value: props.value || '+7 (___) ___-__-__',
        }
    }

    static defaultProps = {
        size: 'large',
        disabled: false,
    }

    static getDerivedStateFromProps(nextProps) {
        if ('value' in nextProps) {
            return {
                ...(nextProps.value || {}),
            }
        }
        return null
    }

    changeValue = e => {
        if (e.type === 'change') {
            this.setState(
                {value: e.target.value},
                this.props.onChange(e.target.value)
            )
        }
    }

    render() {
        const {disabled} = this.props,
            {value} = this.state

        return (
            <InputMask
                mask='+7 (999) 999-99-99'
                value={value}
                onChange={this.changeValue}
                disabled={disabled}
            >
                {props => (
                    <Input
                        {...props}
                        type={'tel'}
                        size={this.props.size}
                        disabled={disabled}
                    />
                )}
            </InputMask>
        )
    }
}

export default Phone
