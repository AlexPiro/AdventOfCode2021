const fs = require('fs')

const inputFish = fs.readFileSync(__dirname + '/input2').toString().split(',').map(e => Number(e))

var updatedState = inputFish.slice();

console.log(updatedState);

const NUMBER_OF_DAYS = 80;

for (let i = 0; i < NUMBER_OF_DAYS; i++)
{
    var newState = [];
    let fishToAdd = 0;
    for (let j = 0; j < updatedState.length; j++)
    {
        let fish = -1;
        if (updatedState[j] == 0)
        {
            fish = 6;
            fishToAdd++
        }
        else
        {
            fish = updatedState[j] - 1;          
        }
    
        newState.push(fish)    
    }

    for (let k = 0; k < fishToAdd; k++) {
        newState.push(8)
    }

    updatedState = newState;

    console.log(`Day ${i+1} : ${updatedState}`)
}

console.log("Number of fish : " + updatedState.length)