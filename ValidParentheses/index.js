const isValid = (s) => {
    if(s === null ||s.length<= 0) return true
    const arr = s.split('')
    const prenthesesArr = []

    for(let item of arr) {
        if (item === '[') prenthesesArr.push(']')
        else if (item === '{') prenthesesArr.push('}')
        else if (item === '(') prenthesesArr.push(')')
        else if (prenthesesArr.length === 0 || item !== prenthesesArr.pop()) return false
    }
    if (prenthesesArr.length === 0) return true
    return false
}

console.log(isValid("()][}{"))