function isPolindrome(x) {
    x = x + '';
    return x === x.split('').reverse().join('');
}
console.log(isPolindrome(121));