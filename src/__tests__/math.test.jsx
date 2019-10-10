const math = require('../utils/Math/Math')

describe('Sum function', () => {
    test('Sum 5.1 + 10.5 equals 15.6', () => {
        const num1 = 5.1
        const num2 = 10.5

        expect(math.sum(num1, num2)).toBe(15.6)
    })

    test('Sum 999999999 + 1 equals ERROR', () => {
        const num1 = 999999999
        const num2 = 1

        expect(math.sum(num1, num2)).toBe('ERROR')
    })
})

describe('Sub function', () => {
    test('Sub 1000.9 - 500.8 equals 4', () => {
        const num1 = 1000.9
        const num2 = 500.8

        expect(math.sub(num1, num2)).toBe(500.1)
    })

    test('Sub 100 - 200 equals ERROR', () => {
        const num1 = 100
        const num2 = 200

        expect(math.sub(num1, num2)).toBe('ERROR')
    })
})

describe('Multiply function', () => {
    test('Mult 100 * 200 equals 20000', () => {
        const num1 = 100
        const num2 = 200

        expect(math.mult(num1, num2)).toBe(20000)
    })

    test('Mult 500000000 * 2 equals ERROR', () => {
        const num1 = 500000000
        const num2 = 2

        expect(math.mult(num1, num2)).toBe('ERROR')
    })
})

describe('Divide function', () => {
    test('Div 55 / 5.5 equals 10', () => {
        const num1 = 55
        const num2 = 5.5
        expect(math.div(num1, num2)).toBe(10)
    })

    test('Div 55000000.55 / 5.5 equals 10000000', () => {
        const num1 = 55000000.55
        const num2 = 5.5

        expect(math.div(num1, num2)).toBe(10000000)
    })
})

describe('Modulo function', () => {
    test('Mod 5 % 4 equals 1', () => {
        const num1 = 5
        const num2 = 4

        expect(math.mod(num1, num2)).toBe(1)
    })

    test('Mod 10 % -3 equals 1', () => {
        const num1 = 10
        const num2 = -3

        expect(math.mod(num1, num2)).toBe(1)
    })
})
