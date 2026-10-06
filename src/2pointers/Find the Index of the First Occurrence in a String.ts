function strStr(haystack: string, needle: string): number {
    let index = -1
    let count = 0
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0
        for (j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                break
            }
            if (j === needle.length) {
                return i
            }
        }
    }
    return -1
};

console.log(strStr('hello', 'll'))
console.log(strStr('mississippi', 'issip'))