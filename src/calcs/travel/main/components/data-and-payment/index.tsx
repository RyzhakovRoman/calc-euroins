import * as React from 'react'
import {FC} from 'react'
import Input from 'antd/lib/input'
import Form, {FormInstance} from 'antd/lib/form'
import Contacts from '../contacts'
import IDS from '../../constants/ids'
import InsuredsInfo from '../insureds-info'
import InsurantInfo from '../insurant-info'
import AgreementWithProtectionPolicy from '../agreement-with-protection-policy'

const {Item} = Form

interface DataAndPaymentPropsInterface {
    form: FormInstance
}

const DataAndPayment: FC<DataAndPaymentPropsInterface> = ({form}) => {
    return (
        <>
            <Contacts />
            <InsuredsInfo form={form} />
            <InsurantInfo />
            <AgreementWithProtectionPolicy />
        </>
    )
}

export default DataAndPayment
