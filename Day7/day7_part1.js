const fs = require('fs')

var inputRaw = fs.readFileSync('input2').toString().split(',').map(e => parseInt(e, 10))


//console.log(inputRaw)

// function Average(input)
// {
//     let total = input.reduce((count, total) => count + total)
    
//     return total / input.length
// }

function Mediane(input)
{
    let sort = input.sort((a, b) => a - b)
    
    if (input.length % 2 == 0) //even
    {
        return (sort[Math.floor(input.length/2)] + sort[Math.ceil(input.length/2)]) / 2
    }
    else //odd
    {
        return sort[Math.floor(input.length/2)]
    }

}

let fuelConsumption = 0;
let targetValue = Mediane(inputRaw);
console.log(`Ttarget value : ${targetValue}`)

for (let i = 0; i < inputRaw.length; i++)
{
    let consumption = Math.abs(inputRaw[i] - targetValue);
    //console.log(`Crab ${inputRaw[i]} consume ${consumption}`)
    fuelConsumption += consumption;
}

console.log(fuelConsumption)
