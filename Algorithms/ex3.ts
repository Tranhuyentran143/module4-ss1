// kiểm tra chuỗi đối xứng
// ex: abcba => chuỗi đối xứng
// abcde => chuỗi không đối xứng

const checkStr = (str: string): boolean => {
    for (let i= 0; i < str.length/2; i++) {
        if (str[i] != str[str.length -1-i]) {
            return false
        }
    }

    return true

}
console.log(checkStr("abcba"));
console.log(checkStr("abcde"));
console.log(checkStr("abcaa"));


