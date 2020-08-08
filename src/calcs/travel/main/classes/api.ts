import GetCostRequestInterface from '../types/requests/get-cost'
import CostInfoInterface from '../types/models/cost-info'
import {
    HEADERS,
    POST,
    URL_CREATE_POLICY,
    URL_GET_ASSISTANCES,
    URL_GET_COST,
    URL_GET_PAY_URL,
    URL_GET_SPORTS,
} from '../constants'
import AssistancesType from '../types/models/assistance'
import {SportsType} from '../types/models/sport'
import CreatePolicyRequestInterface from '../types/requests/create-policy'
import PolicyInfoInterface from '../types/models/policy-info'
import GetPaymentLinkRequestInterface from '../types/requests/get-payment-link'
import PaymentLinkInfoInterface from '../types/models/payment-link-info'

const getInitFetch = data => ({
    method: POST,
    headers: HEADERS,
    body: JSON.stringify(data),
})

interface ErrorInterface {
    errors: string[]
}

class Api {
    static async getCost(
        data: GetCostRequestInterface
    ): Promise<ErrorInterface | CostInfoInterface> {
        try {
            const response: Response = await fetch(
                URL_GET_COST,
                getInitFetch(data)
            )
            if (response.status !== 200)
                throw new Error('Ошибка запроса стоимости.')
            return await response.json()
        } catch (e) {
            return {errors: [e.message]}
        }
    }

    static async createPolicy(
        data: CreatePolicyRequestInterface
    ): Promise<ErrorInterface | PolicyInfoInterface> {
        try {
            const response: Response = await fetch(
                URL_CREATE_POLICY,
                getInitFetch(data)
            )
            if (response.status === 400) {
                const responseData: ErrorInterface = await response.json()
                throw new Error(
                    JSON.stringify(responseData.errors) ||
                        'Ошибка создания полиса.'
                )
            }
            if (response.status !== 200)
                throw new Error('Ошибка создания полиса.')
            return await response.json()
        } catch (e) {
            return {errors: [e.message]}
        }
    }

    static async getPaymentLink(
        data: GetPaymentLinkRequestInterface
    ): Promise<ErrorInterface | PaymentLinkInfoInterface> {
        try {
            const response: Response = await fetch(
                URL_GET_PAY_URL,
                getInitFetch(data)
            )
            if (response.status !== 200)
                throw new Error('Ошибка получения ссылки на оплату.')
            return await response.json()
        } catch (e) {
            return {errors: [e.message]}
        }
    }

    static async getAssistances(): Promise<ErrorInterface | AssistancesType> {
        try {
            const response: Response = await fetch(URL_GET_ASSISTANCES)
            if (response.status !== 200)
                return {errors: ['Ошибка загрузки ассистансов.']}
            return await response.json()
        } catch (e) {
            return {errors: [e.message]}
        }
    }

    static async getSports(): Promise<ErrorInterface | SportsType> {
        try {
            const response: Response = await fetch(URL_GET_SPORTS)
            if (response.status !== 200)
                return {errors: ['Ошибка загрузки видов спорта.']}
            return await response.json()
        } catch (e) {
            return {errors: [e.message]}
        }
    }
}

export default Api
