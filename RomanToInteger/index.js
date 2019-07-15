let romanToInt = function(str) {
    if (str == null) return -1;
    var num = roman_to_int(str.charAt(0));
    let pre, curr;

    for (let i = 1; i < str.length; i++) {
        curr = roman_to_int(str.charAt(i));
        pre = roman_to_int(str.charAt(i - 1));
        if (curr <= pre) {
            num += curr;
        } else {
            num = num - pre * 2 + curr;
        }
    }

    return num;
};

function roman_to_int(c) {
    switch (c) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return -1;
    }
}

console.log(romanToInt('IX'))