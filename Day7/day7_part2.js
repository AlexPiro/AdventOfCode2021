const fs = require('fs')

var inputRaw = fs.readFileSync('input2').toString().split(',').map(e => parseInt(e, 10))


//console.log(inputRaw)

function Average(input)
{
    let total = input.reduce((count, total) => count + total)
    
    return total / input.length
}

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

var bestFuelConsumption = Number.MAX_SAFE_INTEGER;

for (let j = Math.min(...inputRaw); j <= Math.max(...inputRaw); j++)
{
    let fuelConsumption = 0;
    // let targetValue = Math.ceil(Average(inputRaw));
    // console.log(`Target value : ${targetValue}`)
    let targetValue = j;

    for (let i = 0; i < inputRaw.length; i++)
    {
        let step = Math.abs(inputRaw[i] - targetValue);
        let consumption = step * (step + 1)  / 2
        //console.log(`Crab ${inputRaw[i]} consume ${consumption}`)
        fuelConsumption += consumption;
    }

    console.log(`Fuel consumption for line ${j} : ${fuelConsumption}`)
    if (fuelConsumption < bestFuelConsumption)
    {
        
        bestFuelConsumption = fuelConsumption;
    }
}


console.log(bestFuelConsumption)
