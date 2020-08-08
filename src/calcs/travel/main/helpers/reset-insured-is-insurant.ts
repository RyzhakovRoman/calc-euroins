import {FormInstance} from 'antd/lib/form'
import IDS from '../constants/ids'

const resetInsuredIsInsurant = (form: FormInstance) => {
    form.setFieldsValue({
        [IDS.INSURED_IS_INSURANT_ID]: null,
        [IDS.INSURANT]: {
            [IDS.LAST_NAME]: '',
            [IDS.FIRST_NAME]: '',
            [IDS.MIDDLE_NAME]: '',
            [IDS.BIRTHDAY]: null,
            [IDS.PASSPORT_SERIAL]: '',
            [IDS.PASSPORT_NUMBER]: '',
        },
    })
}

export default resetInsuredIsInsurant
