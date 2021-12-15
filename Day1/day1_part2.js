const fs = require('fs')

var input1 = fs.readFileSync('inputExample').toString().split("\r\n").map(e => Number(e))
var input2 = fs.readFileSync('input').toString().split("\r\n").map(e => Number(e))


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


function FindLargerThanPrevious3Measurement(input)
{
    let measurmentArray = []

    for(let i=0; i< input.length-2; i++)
    {
        measurmentArray[i] = input[i] + input[i+1] + input[i+2]
    }

    //console.log(measurmentArray)
    FindLargerThanpreviousMeasurement(measurmentArray)
}


FindLargerThanPrevious3Measurement(input1)
FindLargerThanPrevious3Measurement(input2)