function addTwoNumbers(num1, num2) {
    let result = '';
    num1 = num1.reverse().join('');
    num2 = num2.reverse().join('');
    result = String(+num1 + (+num2));
    result = result.split('').reverse().join('');
    return result;
}

console.log(addTwoNumbers([2, 3, 1], [4, 5, 6]));