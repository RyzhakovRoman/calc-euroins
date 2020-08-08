import {PolicyTypeType} from '../url-params'

export default interface CreateAnswerRequestInterface {
    policyId: number
    policyType: PolicyTypeType
    referrer: string
}
