interface InsuredInterface {
    lastName: string
    firstName: string
    birthday: string
    passportNumber: string
}

interface InsurerInterface {
    lastName: string
    firstName: string
    middleName: string
    address: string
    phone: string
    email: string
    birthday: string
    passport: {
        serial: string
        number: string
        issuedDate: string
    }
}

export interface RiskInterface {
    name: string
    sum: number
}

export interface OptionsInterface {
    assistance?: string
    clientIsn?: number
    bonus?: number
    referrer?: string
    ymClientId?: string
    any
}

interface CreatePolicyRequestInterface {
    sum: number // сумма страхования
    currency: string // USD OR EUR
    totalDays: number // период страхования
    beginDate: string
    endDate: string
    persons: InsuredInterface[]
    insurer: InsurerInterface // страхователь
    countries: number[] // куда едет застрахованный
    code: string // код партнера
    sports?: number[]
    risks?: RiskInterface[]
    multi?: boolean // страховка на одну поездку или на все поездки, которые есть в указанном периоде страхования
    options?: OptionsInterface
    test?: boolean // тестовый полис
}

export default CreatePolicyRequestInterface
