const fs = require('fs');

const input = fs.readFileSync("input2").toString().split('\n');

const allDrawNumber = input[0].split(',').map(n => Number(n))

//
const boards = [];

input.splice(0, 2)
var boardsInput = input.filter(e => e !== ''); 


for(let i=0; i< boardsInput.length; i+=5)
{
    let board = [];
    board.push(boardsInput[i].match(/.{1,3}/g).map(n=> Number(n)))
    board.push(boardsInput[i+1].match(/.{1,3}/g).map(n=> Number(n)))
    board.push(boardsInput[i+2].match(/.{1,3}/g).map(n=> Number(n)))
    board.push(boardsInput[i+3].match(/.{1,3}/g).map(n=> Number(n)))
    board.push(boardsInput[i+4].match(/.{1,3}/g).map(n=> Number(n)))

    boards.push(board);
}

let drawNumber = []

var result = 0;
let boardWin = false;

var unMatchedNumbers = 0;

for(let i=0; i<allDrawNumber.length; i++)
{
    let lastDrawNumber = allDrawNumber[i];
    drawNumber.push(lastDrawNumber);

    for(let j=0; j< boards.length; j++)
    {
        let currentBoard = boards[j];
    
        unMatchedNumbers = 0;
        
        for (let k = 0; k < currentBoard.length; k++)
        {
            let currentRow = currentBoard[k];

            let rowMatchCount = 0;

            //check all the line
            for (let o = 0; o < currentRow.length; o++)
            {
                if (drawNumber.indexOf(currentRow[o]) == -1)
                {
                    unMatchedNumbers += currentRow[o];
                    continue;
                }

                rowMatchCount++;
            }

            if(rowMatchCount == 5)
            {
                console.log(`Board ${j} win with line ${k}`);
                
                console.log(unMatchedNumbers);
                boardWin = true;

            }
     
        }

        if (boardWin)
            break;

        //check each column
        for(let k=0; k< 5; k++)
        {
            let columnMatchCount = 0
            for (let o = 0; o < currentBoard.length; o++)
            {
                let currentRow = currentBoard[o]
                if (drawNumber.indexOf(currentRow[k]) == -1)
                {
                    continue;
                }

                columnMatchCount++
            }


            if (columnMatchCount == 5)
            {
                console.log(`Board ${j} win with column ${k}`);
                boardWin = true;
            }
    
        }

        if (boardWin)
            break;
        
    }

    if (boardWin)
    {

        console.log("Last draw number " + lastDrawNumber)
        console.log("Sum " + unMatchedNumbers)
        result = unMatchedNumbers * lastDrawNumber;

        console.log("Winner win with result : " + result)
        break;
    }

}
