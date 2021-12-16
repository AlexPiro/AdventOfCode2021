const fs = require('fs')


var rawInput = fs.readFileSync("input2").toString().split('\n')

var vents = rawInput.map(e => e.split(' -> '))

vents = vents.map(e => e.map(r => r.split(',').map(s => Number(s))))

let maxX = 0;
let maxY = 0;

//get max of X and Y to create matrix
for (let i = 0; i < vents.length; i++)
{

    let currentMaxX = Math.max(vents[i][0][0], vents[i][1][0]);
    if (currentMaxX > maxX)
    {
        maxX = currentMaxX; 
    }

    let currentMaxY = Math.max(vents[i][0][1], vents[i][1][1]);
    if (currentMaxY > maxY)
    {
        maxY = currentMaxY;  
    }

}

console.log(`Max X : ${maxX} - Max Y: ${maxY}`)

let hydroThermalMap = new Array(maxY+1).fill(0).map(e => new Array(maxX+1).fill(0))


//fill map with vents values
for (let i = 0; i < vents.length; i++)
{
    let vent = vents[i]
    //check if horizontal of vertical line
    if (vent[0][0] == vent[1][0])
    {
        let startY = Math.min(vent[0][1], vent[1][1]);
        let endY = Math.max(vent[0][1], vent[1][1]);
        for (let j = startY; j <= endY; j++)
        {
            let currentValue = hydroThermalMap[j][vent[0][0]];
            hydroThermalMap[j][vent[0][0]] = currentValue >= 1 ? 2 : 1;
        }
    }
    else if (vent[0][1] == vent[1][1])
    {
        let startX = Math.min(vent[0][0], vent[1][0]);
        let endX = Math.max(vent[0][0], vent[1][0]);
        for (let j = startX; j <= endX; j++)
        {
            let currentValue = hydroThermalMap[vent[0][1]][j];
            hydroThermalMap[vent[0][1]][j] = currentValue >= 1 ? 2 : 1;
        }
    }
    else
    {
        //console.log("Line is diagonal")
        continue;
    }
}

console.log(hydroThermalMap)

let overlapCount = 0;
for (let i = 0; i < hydroThermalMap.length; i++)
{
    hydroThermalMap[i].forEach(e => {
        if (e == 2)
            overlapCount++
    })
}

console.log(`Overlap count ${overlapCount}`)