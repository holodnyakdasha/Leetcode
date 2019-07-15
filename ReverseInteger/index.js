function reverse(x) {
    let result = 0;
    while (x != 0) {
        result = result * 10 + x % 10;
        x = x / 10;
    }

    if (result < Number.MIN_VALUE || result > Number.MAX_VALUE) {
        return 0;
    } else {
        return Number(result);
    }
}

console.log(reverse(39));