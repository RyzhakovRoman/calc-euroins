export interface BonusesInterface {
    count: number
}

export default interface GlobalOptionsInterface {
    rootNodeId: string
    code: string
    pid?: string
    bonuses?: BonusesInterface
    clientIsn?: string
    dinamyc: {
        test: boolean
    }
}
