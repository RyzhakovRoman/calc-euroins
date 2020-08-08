const requiredTrueCheckboxValidator = (r, v) => {
    if (!v) return Promise.reject('Поставьте галочку')
    return Promise.resolve()
}

export default requiredTrueCheckboxValidator
