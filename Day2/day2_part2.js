const fs = require('fs')


var input1 = fs.readFileSync('input').toString().split('\r\n')
var input2 = fs.readFileSync('input2').toString().split('\r\n')

function GetCommands(input)
{
    
    let horizontal = 0
    let depth = 0
    let aim = 0;
    
    for(let i=0; i< input.length; i++)
    {
        let command = input[i].split(' ')[0];
        let value = Number(input[i].split(' ')[1]);

        switch(command)
        {
            case "forward":
                horizontal += value;
                depth += aim * value;
                break;
            case "up":
                aim -= value;
                break;
            case "down":
                aim += value;
                break;
        }

    }

    console.log(`Horizontal ${horizontal} and depth ${depth}`)

    console.log("Result = " + horizontal * depth)
}

GetCommands(input1)
GetCommands(input2)