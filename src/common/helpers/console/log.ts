declare const ENV_IS_DEV: boolean

export function log(...params) {
    if (ENV_IS_DEV) console.log(...params)
}
