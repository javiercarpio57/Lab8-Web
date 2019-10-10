function sum(a, b) {
    const result = a + b

    return result <= 999999999 ? result : 'ERROR'
}

function sub(a, b) {
    const result = (a * 10 - b * 10) / 10

    return result < 0 ? 'ERROR' : result
}

function mult(a, b) {
    const result = a * b

    return result <= 999999999 ? result : 'ERROR'
}

function div(a, b) {
    const result = a / b

    return result.toString().length < 9 ? result : Number(result.toString().slice(0, 9))
}

function mod(a, b) {
    return a % b
}

module.exports.sum = sum
module.exports.sub = sub
module.exports.mult = mult
module.exports.div = div
module.exports.mod = mod
