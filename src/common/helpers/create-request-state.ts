import {RequestStateInterface} from '../types/state/request'

export const createInitialState = <T>(): RequestStateInterface<T> => {
    return {
        requestStatus: 'didNotLoad',
        errorMessage: '',
        data: null,
    }
}

export const createStartedState = <T>(
    data: T = null
): RequestStateInterface<T> => {
    return {
        requestStatus: 'started',
        errorMessage: '',
        data,
    }
}

export const createErrorState = <T>(
    errors: string[]
): RequestStateInterface<T> => {
    return {
        requestStatus: 'error',
        errorMessage: errors.join(', '),
        data: null,
    }
}

export const createSuccessState = <T>(data: T): RequestStateInterface<T> => {
    return {
        requestStatus: 'success',
        errorMessage: '',
        data,
    }
}
