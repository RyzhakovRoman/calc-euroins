import * as React from 'react'
import {FC} from 'react'
import IDS from '../../../constants/ids'
import Form from 'antd/lib/form'
import 'antd/lib/form/style'
import Radio from 'antd/lib/radio'
import 'antd/lib/radio/style'

const {Item, List} = Form,
    {Group, Button} = Radio

interface InsuredIsInsurantPropsInterface {
    adultInsureds: any
    onInsuredSelect: () => void
    onReset: () => void
}

const InsuredIsInsurant: FC<InsuredIsInsurantPropsInterface> = ({
    adultInsureds,
    onInsuredSelect,
    onReset,
}) => {
    return (
        <div style={{marginBottom: 16}}>
            <p>Сделать страхователем одного из застрахованных?</p>
            <div className={'e-insurant-info__insureds'}>
                <Item name={IDS.INSURED_IS_INSURANT_ID}>
                    <Group size={'small'} onChange={onInsuredSelect}>
                        {adultInsureds.map((insured, i) => (
                            <Button value={i} key={i}>
                                {insured[IDS.LAST_NAME]}{' '}
                                {insured[IDS.FIRST_NAME]}
                            </Button>
                        ))}
                    </Group>
                </Item>
                <span className={'e-insurant-info__reset'} onClick={onReset}>
                    сброс
                </span>
            </div>
        </div>
    )
}

export default InsuredIsInsurant
