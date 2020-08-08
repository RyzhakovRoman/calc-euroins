export type PaymentStatusType = 'success' | 'error'
export type PolicyTypeType = string

export default interface UrlParamsInterface {
    payment_status?: PaymentStatusType
    policy_type?: PolicyTypeType
    policy_id?: string
}
