const useUrlParams = <T>(): T => {
    return window.location.search
        .replace('?', '') //! знаки ? строго как разделители
        .split('&')
        .reduce((prevValue, curValue) => {
            const param = curValue.split('=')
            prevValue[param[0]] = param[1]
            return prevValue
        }, {}) as T
}

export default useUrlParams
