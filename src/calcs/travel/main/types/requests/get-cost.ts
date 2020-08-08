interface InsuredInfoInterface {
    lastName: string
    firstName: string
    birthday: string
    passportNumber: string
}
interface InsuredShortInfoInterface {
    birthday: string
}

export interface RiskInterface {
    name: string
    sum: number
}

export default interface GetCostRequestInterface {
    sum: number // сумма страхования
    currency: string // USD OR EUR
    totalDays: number // период страхования
    persons: InsuredShortInfoInterface[] // застрахованные
    countries: number[] // куда едет застрахованный
    code: string // код партнера
    beginDate: string
    endDate: string
    sports?: number[]
    risks?: RiskInterface[]
    multi?: boolean // страховка на одну поездку или на все поездки, которые есть в указанном периоде страхования
    options?: {
        covid?: boolean
    }
}
