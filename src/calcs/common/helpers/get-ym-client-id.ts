declare const window: any

const getYmClientID = NAME_YM => {
    if (window[NAME_YM] === undefined) return
    return window[NAME_YM].getClientID && window[NAME_YM].getClientID()
}

export default getYmClientID
