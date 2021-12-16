const fs = require('fs')

const inputFish = fs.readFileSync(__dirname + '/input2').toString().split(',').map(e => Number(e))

var counter = new Array(9).fill(0)

inputFish.forEach(e => counter[e] += 1)

const NUMBER_OF_DAYS = 256;

for (let i = 0; i < NUMBER_OF_DAYS; i++)
{
    let newFish = counter.shift();
    
    counter[6] += newFish;

    counter.push(newFish)

}

console.log("Total " + counter.reduce((count, total) => count + total))

