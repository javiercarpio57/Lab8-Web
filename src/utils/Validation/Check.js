function check(num) {
    return num.toString().length > 9 ? num.toString().slice(0, 9) : num.toString()
}

function isNumber(data) {
    if ('1234567890.'.includes(data)) {
        return 1
    }
    if ('+-×=÷'.includes(data)) {
        return 2
    }
    return 3
}

function canAddDot(number) {
    return !number.includes('.')
}

module.exports.check = check
module.exports.isNumber = isNumber
module.exports.canAddDot = canAddDot
