import * as React from 'react'
import {FC, useCallback, useState} from 'react'
import Form, {FormInstance} from 'antd/lib/form'
import 'antd/lib/form/style'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import Select from 'antd/lib/select'
import 'antd/lib/select/style'
import Alert from 'antd/lib/alert'
import 'antd/lib/alert/style'
import DatePicker from 'antd/lib/date-picker'
import 'antd/lib/date-picker/style'
import Date from '../../../../../common/components/custom-form-components/date'
import RangeIterator from '../../../../../common/helpers/range-iterator'
import IDS from '../../constants/ids'
import LABELS from '../../constants/labels'
import './index.less'
import {COMPONENT_SIZE} from '../../constants'
import {
    DATE_PICKER_PLACEHOLDER,
    OUTPUT_DATE_FORMAT,
    SCREEN_IS_SMALL,
} from '../../../../common/constants'
import {Moment} from 'moment'

interface SingleTripPropsInterface {
    form: FormInstance
    minStartDate: Moment
}

const {Option} = Select,
    {Item} = Form,
    getOptions = (from, to) => {
        const rangeDaysIterator = new RangeIterator(from, to),
            arrayOptions = []

        for (const day of rangeDaysIterator) {
            arrayOptions.push(
                <Option key={day} value={day}>
                    {day}
                </Option>
            )
        }

        return arrayOptions
    }

const SingleTrip: FC<SingleTripPropsInterface> = ({
    form,
    form: {getFieldValue, setFieldsValue},
    minStartDate,
}) => {
    const [showAlert, setShowAlert] = useState<boolean>(false),
        getMaxNumberOfDays = useCallback(() => {
            const startDate = getFieldValue(IDS.PERIOD_START_DATE),
                endDate = getFieldValue(IDS.PERIOD_END_DATE)
            if (startDate && endDate)
                return Math.round(endDate.diff(startDate, 'days', true)) + 1
            return 1
        }, []),
        setNumberOfDays = useCallback((startDate, endDate) => {
            if (startDate && endDate)
                setFieldsValue({
                    [IDS.NUMBER_OF_DAYS]:
                        Math.round(endDate.diff(startDate, 'days', true)) + 1,
                })
        }, []),
        handleNumberOfDaysChange = useCallback(() => {
            const startDate = getFieldValue(IDS.PERIOD_START_DATE),
                endDate = getFieldValue(IDS.PERIOD_END_DATE),
                numberOfDays = getFieldValue(IDS.NUMBER_OF_DAYS),
                datesAreEntered = !!(startDate && endDate),
                numberOfDaysLessPeriod =
                    datesAreEntered &&
                    numberOfDays <
                        Math.round(endDate.diff(startDate, 'days', true)) + 1
            if (numberOfDaysLessPeriod) setShowAlert(true)
            else setShowAlert(false)
        }, []),
        commonValidator = useCallback(async (r, v) => {
            if (!v) return Promise.reject('Введите дату')
            // если выбранная дата меньше минимальной даты
            if (v < minStartDate) return Promise.reject('Неверная дата')
            return Promise.resolve()
        }, []),
        validatorStartDate = useCallback(async (r, v) => {
            return commonValidator(r, v)
                .then(() => {
                    const endDate = getFieldValue(IDS.PERIOD_END_DATE)
                    // Если дату окончания еще не ввели, то пока не проверяем
                    if (!endDate) return Promise.resolve()
                    // Если дата окончания введена и
                    // если дата начала позже даты окончания, то не валидно
                    if (endDate && v > endDate)
                        return Promise.reject(
                            'Дата начала не может быть позднее даты окончания'
                        )
                    return Promise.resolve()
                })
                .catch(error => Promise.reject(error))
        }, []),
        validatorEndDate = useCallback(async (r, v) => {
            return commonValidator(r, v)
                .then(() => {
                    const startDate = getFieldValue(IDS.PERIOD_START_DATE)
                    // Если дату окончания еще не ввели, то пока не проверяем
                    if (!startDate) return Promise.resolve()
                    // Если дата начала введена и
                    // если дата начала позже даты окончания, то не валидно
                    if (startDate && v < startDate)
                        return Promise.reject(
                            'Дата окончания должна быть раньше даты начала'
                        )
                    return Promise.resolve()
                })
                .catch(error => Promise.reject(error))
        }, []),
        handlePeriodStartDateChange = useCallback(() => {
            form.validateFields([IDS.PERIOD_END_DATE]).then(values => {
                // Если все хорошо, выставляем кол-во дней
                setNumberOfDays(
                    getFieldValue(IDS.PERIOD_START_DATE),
                    values[IDS.PERIOD_END_DATE]
                )
                handleNumberOfDaysChange()
            })
        }, [setNumberOfDays]),
        handlePeriodEndDateChange = useCallback(() => {
            form.validateFields([IDS.PERIOD_START_DATE]).then(values => {
                // Если все хорошо, выставляем кол-во дней
                setNumberOfDays(
                    values[IDS.PERIOD_START_DATE],
                    getFieldValue(IDS.PERIOD_END_DATE)
                )
                handleNumberOfDaysChange()
            })
        }, [])

    return (
        <Row>
            <Col sm={12}>
                <h2>Период страхования</h2>

                <Row gutter={16}>
                    <Col>
                        <Item
                            label={LABELS.PERIOD_START_DATE}
                            name={IDS.PERIOD_START_DATE}
                            labelCol={{sm: 24}}
                            colon={false}
                            rules={[
                                {
                                    validator: validatorStartDate,
                                },
                            ]}
                            required
                        >
                            {SCREEN_IS_SMALL ? (
                                <Date onChange={handlePeriodStartDateChange} />
                            ) : (
                                <DatePicker
                                    disabledDate={current =>
                                        current < minStartDate
                                    }
                                    format={OUTPUT_DATE_FORMAT}
                                    size={COMPONENT_SIZE}
                                    onChange={handlePeriodStartDateChange}
                                    placeholder={DATE_PICKER_PLACEHOLDER}
                                />
                            )}
                        </Item>
                    </Col>
                    <Col>
                        <Item
                            label={LABELS.PERIOD_END_DATE}
                            name={IDS.PERIOD_END_DATE}
                            labelCol={{sm: 24}}
                            colon={false}
                            rules={[
                                {
                                    validator: validatorEndDate,
                                },
                            ]}
                            required
                        >
                            {SCREEN_IS_SMALL ? (
                                <Date onChange={handlePeriodEndDateChange} />
                            ) : (
                                <DatePicker
                                    disabledDate={current =>
                                        current < minStartDate
                                    }
                                    format={OUTPUT_DATE_FORMAT}
                                    size={COMPONENT_SIZE}
                                    onChange={handlePeriodEndDateChange}
                                    placeholder={DATE_PICKER_PLACEHOLDER}
                                />
                            )}
                        </Item>
                    </Col>
                </Row>
            </Col>
            <Col sm={12}>
                <h2>Количество дней</h2>

                <Item
                    className={'single-trip__item-wrapper'}
                    label={<span>&nbsp;</span>}
                    labelCol={{sm: 24}}
                    colon={false}
                    shouldUpdate={(prevValues, currentValues) => {
                        // console.log(rest)
                        return (
                            prevValues[IDS.PERIOD_START_DATE] !==
                                currentValues[IDS.PERIOD_START_DATE] ||
                            prevValues[IDS.PERIOD_END_DATE] !==
                                currentValues[IDS.PERIOD_END_DATE]
                        )
                    }}
                >
                    {({getFieldValue}: FormInstance) => {
                        const startDate = getFieldValue(IDS.PERIOD_START_DATE),
                            endDate = getFieldValue(IDS.PERIOD_END_DATE),
                            datesAreEntered = !!(startDate && endDate)

                        return (
                            <Item
                                name={IDS.NUMBER_OF_DAYS}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Выберете количество дней',
                                    },
                                ]}
                                required
                            >
                                <Select
                                    className={'single-trip__days-amount'}
                                    placeholder={'Дни'}
                                    disabled={!datesAreEntered}
                                    size={COMPONENT_SIZE}
                                    onChange={handleNumberOfDaysChange}
                                >
                                    {getOptions(1, getMaxNumberOfDays())}
                                </Select>
                            </Item>
                        )
                    }}
                </Item>
            </Col>
            {showAlert && (
                <Col sm={24}>
                    <br />
                    <Alert
                        message={'Количество дней меньше периода страхования'}
                        type={'warning'}
                        showIcon
                    />
                </Col>
            )}
        </Row>
    )
}

export default SingleTrip
