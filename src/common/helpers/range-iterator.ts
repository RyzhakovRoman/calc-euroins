export default class RangeIterator implements Iterable<number> {
    constructor(public from: number, public to: number) {}

    [Symbol.iterator]() {
        const from = this.from,
            to = this.to
        let current = undefined

        return {
            next(): {done: boolean; value: number} {
                if (current === undefined) {
                    // инициализация состояния итерации
                    current = from
                }
                if (current <= to) {
                    return {
                        done: false,
                        value: current++,
                    }
                } else {
                    // очистка текущей итерации
                    current = undefined
                    return {
                        done: true,
                        value: null,
                    }
                }
            },
        }
    }
}
