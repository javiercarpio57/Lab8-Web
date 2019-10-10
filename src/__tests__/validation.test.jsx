const validation = require('../utils/Validation/Check')

describe('Validation of input', () => {
    test('9999999999 equals 999999999', () => {
        const num = 9999999999

        expect(validation.check(num)).toBe('999999999')
    })
})
