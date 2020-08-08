import * as React from 'react'
import {FC, useCallback} from 'react'
import Form, {FormInstance} from 'antd/lib/form'
import 'antd/lib/form/style'
import {Moment} from 'moment'
import {
    DATE_PICKER_PLACEHOLDER,
    OUTPUT_DATE_FORMAT,
    SCREEN_IS_SMALL,
} from '../../../../common/constants'
import Date from '../../../../../common/components/custom-form-components/date'
import DatePicker from 'antd/lib/date-picker'
import 'antd/lib/date-picker/style'
import IDS from '../../constants/ids'
import {COMPONENT_SIZE} from '../../constants'
import ru_RU from 'antd/es/date-picker/locale/ru_RU'

interface MultipleTripPropsInterface {
    form: FormInstance
    minStartDate: Moment
}

const {Item} = Form

const MultipleTrip: FC<MultipleTripPropsInterface> = ({minStartDate}) => {
    const validatorStartDate = useCallback(async (r, v) => {
        if (!v) return Promise.reject('Введите дату')
        if (v < minStartDate) return Promise.reject('Неверная дата')
        return Promise.resolve()
    }, [])

    return (
        <>
            <h2>Дата начала действия</h2>

            <Item
                name={IDS.PERIOD_START_DATE}
                colon={false}
                labelCol={{sm: 24}}
                rules={[{validator: validatorStartDate}]}
            >
                {SCREEN_IS_SMALL ? (
                    <Date />
                ) : (
                    <DatePicker
                        locale={ru_RU}
                        showToday={false}
                        disabledDate={current => current < minStartDate}
                        format={OUTPUT_DATE_FORMAT}
                        size={COMPONENT_SIZE}
                        placeholder={DATE_PICKER_PLACEHOLDER}
                    />
                )}
            </Item>
        </>
    )
}

export default MultipleTrip
