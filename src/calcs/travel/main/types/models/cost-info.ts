export default interface CostInfoInterface {
    total: number
    totalRub: number
    currency: {
        name: string
        rate: number
    }
    detail: {
        basic: number
        sport: number
    }
}
