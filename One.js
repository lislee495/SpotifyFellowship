/**
 * NYC SPOTIFY FELLOWSHIP
 *
 * Problem 1:
 */

function sortByString(s, t) {
    let newString = s
        .split("")
        .sort((a, b) => t.indexOf(a) - t.indexOf(b))
        .join("")
    return newString
}
// if s and t had different cases, I would use String.toLowerCase() to ensure
// the cases are the same.

console.log(sortByString("good", "odg"))
//"oodg"
console.log(sortByString("weather", "therapyw"))
//"theeraw"