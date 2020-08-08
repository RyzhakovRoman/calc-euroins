import * as React from 'react'
import {FC, useCallback, useState} from 'react'
import Spin from 'antd/lib/spin'
import 'antd/lib/spin/style'
import Radio from 'antd/lib/radio'
import 'antd/lib/radio/style'
import Alert from 'antd/lib/alert'
import 'antd/lib/alert/style'
import Input from 'antd/lib/input'
import 'antd/lib/input/style'
import Button from 'antd/lib/button'
import 'antd/lib/button/style'
import Form from 'antd/lib/form'
import 'antd/lib/form/style'
import {useForm} from 'antd/lib/form/Form'
import UrlParamsInterface from '../../types/url-params'
import {
    createErrorState,
    createInitialState,
    createStartedState,
    createSuccessState,
} from '../../../../common/helpers/create-request-state'
import AnswerCreationInfoType from '../../types/state/answer-creation-info'
import {STANDART_ITEM_RULES} from '../../constants'
import AnswerCreationInfoInterface from '../../types/models/answer-creation-info'
import CreateAnswerRequestInterface from '../../types/requests/create-answer'

const {Item} = Form,
    {Group} = Radio,
    answers = [
        'От друзей',
        'Из facebook',
        'Из instagram',
        'Из поисковика (Яндекс, Google)',
        'Я ваш партнер',
        'Другое',
    ],
    ID_ANSWER = 'answer',
    ID_OTHER_ANSWER = 'otherAnswer',
    method = 'POST',
    headers = new Headers([['Content-Type', 'application/json']]),
    url = 'https://api.euro-ins.ru/referrer/add'

interface QuestionAboutEuroinsPropsInterface {
    params: UrlParamsInterface
}

const initState = createInitialState<AnswerCreationInfoInterface>()

const QuestionAboutEuroins: FC<QuestionAboutEuroinsPropsInterface> = ({
    params,
}) => {
    const [form] = useForm(),
        [answerCreation, setAnswerCreation] = useState<AnswerCreationInfoType>(
            initState
        ),
        handleSendClick = useCallback(async e => {
            e.preventDefault()

            try {
                setAnswerCreation(createStartedState())

                await form.validateFields([ID_ANSWER, ID_OTHER_ANSWER])

                const answerValue = form.getFieldValue(ID_ANSWER),
                    otherAnswerValue = form.getFieldValue(ID_OTHER_ANSWER),
                    data: CreateAnswerRequestInterface = {
                        policyId: +params.policy_id,
                        policyType: params.policy_type,
                        referrer:
                            answerValue === 'Другое'
                                ? otherAnswerValue
                                : answerValue,
                    },
                    response = await fetch(url, {
                        method,
                        headers,
                        body: JSON.stringify(data),
                    })

                if (response.status !== 200)
                    setAnswerCreation(
                        createErrorState(['Неверный статус ответа сервера'])
                    )

                setAnswerCreation(createSuccessState('Успешно'))
            } catch (e) {
                setAnswerCreation(createErrorState([e.message]))
            }
        }, [])

    return (
        <Form
            className={'e-calc'}
            layout={'vertical'}
            form={form}
            name={'about'}
        >
            <h2>Как Вы узнали о ЕВРОИНС?</h2>

            <Spin
                tip={'Отправка ответа...'}
                spinning={answerCreation.requestStatus === 'started'}
            >
                {answerCreation.requestStatus === 'success' ? (
                    <>
                        Ответ отправлен. Ваш ответ:{' '}
                        <b>
                            {form.getFieldValue(ID_ANSWER) === 'Другое'
                                ? form.getFieldValue(ID_OTHER_ANSWER)
                                : form.getFieldValue(ID_ANSWER)}
                        </b>
                        .
                    </>
                ) : answerCreation.requestStatus === 'error' ? (
                    <Alert
                        type={'warning'}
                        message={
                            'Ошибка отправки ответа. Пожалуйста, сообщите в службу тенической поддержки.'
                        }
                    />
                ) : (
                    <>
                        <Item
                            name={'answer'}
                            rules={STANDART_ITEM_RULES}
                            required
                        >
                            <Group>
                                {answers.map((answer, i) => (
                                    <Radio value={answer} key={i}>
                                        {answer}
                                    </Radio>
                                ))}
                            </Group>
                        </Item>
                        <Item shouldUpdate={true}>
                            {form => {
                                const answerValue = form.getFieldValue(
                                    ID_ANSWER
                                )

                                if (answerValue !== 'Другое') return null

                                return (
                                    <Item
                                        name={ID_OTHER_ANSWER}
                                        label={'Оставьте комментарий'}
                                        rules={STANDART_ITEM_RULES}
                                        required
                                    >
                                        <Input size={'large'} />
                                    </Item>
                                )
                            }}
                        </Item>
                        <Button onClick={handleSendClick} type={'primary'}>
                            Отправить ответ
                        </Button>
                    </>
                )}
            </Spin>
        </Form>
    )
}

export default QuestionAboutEuroins
