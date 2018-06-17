/**
 * NYC SPOTIFY FELLOWSHIP
 *
 * Problem 3:
 */

function changePossibilities(coins, amount) {
    if (amount <= 0) throw new Error ("Need a positive amount to start.") 
    const waysToAmount = Array(amount + 1).fill(0);
    waysToAmount[0] = 1;

    coins.forEach(coin => {
        for (let currentAmount = coin; currentAmount <= amount; currentAmount++) {
            waysToAmount[currentAmount] += waysToAmount[currentAmount - coin];
        }
    });
    return waysToAmount[amount];
}

console.log(changePossibilities([1,2,3], 4))
//4
console.log(changePossibilities([1,2,5], 5))
//4
console.log(changePossibilities([1,2], 4))
//3
console.log(changePossibilities([5, 3], -1))
//Throws an error to account for negative starting amount.