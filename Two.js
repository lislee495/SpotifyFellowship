/**
 * NYC SPOTIFY FELLOWSHIP
 *
 * Problem 2:
 */

var decodeString = function (s) {
    if (!s || typeof s !== "string") 
        throw new Error("Need string argument to start.")
    let newString = s //make a copy of the original string
    while (newString.indexOf("[") !== -1) {
        newString = newString.replace(/(\d+)(\[([^[\]]+)\])/, (match, p1, p2, p3) => p3.repeat(p1)) //use regex to find 2 matches, the digits and the inner bracket
    } //replace the match with the new string and iterate till there's no more brackets
    return newString
};

///TEST CASES:

console.log(decodeString("4[ab]"))
//abababab
console.log(decodeString("2[b3[a]]"))
//baaabaaa
console.log(decodeString("10[ab]"))
//abababababababababab
console.log(decodeString(5))
//throws an error
