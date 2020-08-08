export type RequestStatusType = 'didNotLoad' | 'started' | 'success' | 'error'

export interface RequestInfoInterface {
    requestStatus: RequestStatusType
    errorMessage: string
}

export interface RequestStateInterface<T> extends RequestInfoInterface {
    data: T
}
