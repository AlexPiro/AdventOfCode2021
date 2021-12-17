const fs = require('fs')

var inputRaw = fs.readFileSync('input2').toString().split('\n')


let uniqueDigit = 0;
for (let i = 0; i < inputRaw.length; i++)
{
    var outputDigits = inputRaw[i].split(' | ')[1].split(' ')
    
    for (let j = 0; j < outputDigits.length; j++) {
        const digit = outputDigits[j];

        switch (digit.length)
        {
            case 2:
            case 3:
            case 4:
            case 7:
                uniqueDigit++;
                break;
        }
        
    }
}

console.log(`Unique digit 1, 4, 7, 8 count : ${uniqueDigit}`);



