const fs = require('fs');

const input = fs.readFileSync("input").toString().split('\r\n');

const allDrawNumber = input[0].split(',').map(n => Number(n))


// 10,16,13,6,15,25,12,22,18,20,8,19,3,26,1
const boards = [];

input.splice(0, 2)
var boardsInput = input.filter(e=> e !== ''); 

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

let winNumbers = []
let drawNumber = []

for(let i=0; i<allDrawNumber.length; i++)
{
    let lastDrawNumber = allDrawNumber[i];
    drawNumber.push(lastDrawNumber);

    for(let j=0; j< boards.length; j++)
    {
        let currentBoard = boards[j];
        
        for(let k=0; k< currentBoard.length; k++)
        {
            let currentRow = currentBoard[k];

            let matchingNumber = [];

            //check all the line
            currentRow.forEach(m => {
                if(drawNumber.indexOf(m) != -1)
                {
                   matchingNumber.push(currentRow.indexOf(m))
                }
            })

            if(matchingNumber.length == 5)
            {
                console.log("This boards win with a line")
            }


     
        }
        
        
    }

}

//console.log(boards)