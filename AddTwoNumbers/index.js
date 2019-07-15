function addTwoNumbers(num1, num2) {
    let result = '';
    num1 = num1.toString().split('').reverse().join('');
    num2 = num2.toString().split('').reverse().join('');
    result = String(+num1 + (+num2));
    result = result.split('').reverse().join('');
    return result;
}

console.log(addTwoNumbers(231, 456));