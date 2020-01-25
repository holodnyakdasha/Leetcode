const isPolindrome = (str) => {
    let reverse = str.split('').reverse().join('')
    return str === reverse
}

const getLongestPolindrome = (str) => {
    if(str.length === 0) return '""'
    if(str.length <= 2) return str[0]
    let maxLength = 0
    let maxPolindrome = ''

    for (let i = 0; i <= str.length; i++) {
        let substr = str.substr(i, str.length)
        for (let j = substr.length; j>=0; j--) {
            let sub_subs = substr.substr(0, j)
            if (sub_subs.length <= 1)
                continue
                if (isPolindrome(sub_subs)) {
                    if (sub_subs.length > maxLength) {
                        maxLength = sub_subs.length;
                        maxPolindrome = sub_subs;
                    }
                  }
                }
            }
              return maxPolindrome
}

console.log(getLongestPolindrome(''))