const fs = require('fs')

var input1 = fs.readFileSync('inputExample').toString().split("\r\n").map(e => Number(e));
var input2 = fs.readFileSync('input').toString().split("\r\n").map(e => Number(e));


function FindLargerThanpreviousMeasurement(input)
{
    let counter = 0;
    for(let i=1; i< input.length; i++)
    {
        if(input[i] > input[i-1])
        {
            counter++
        }

    }

    console.log(counter)
}

FindLargerThanpreviousMeasurement(input1);
FindLargerThanpreviousMeasurement(input2);