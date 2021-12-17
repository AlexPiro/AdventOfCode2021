const fs = require('fs')

var inputRaw = fs.readFileSync('input2').toString().split('\n')


//initial pattern
//      a b c d e f g
const digitSegments = [
    [1, 1, 1, 0, 1, 1, 1], // 0
    [0, 0, 1, 0, 0, 1, 0], // 1
    [1, 0, 1, 1, 1, 0, 1], // 2
    [1, 0, 1, 1, 0, 1, 1], // 3
    [0, 1, 1, 1, 0, 1, 0], // 4
    [1, 1, 0, 1, 0, 1, 1], // 5
    [1, 1, 0, 1, 1, 1, 1], // 6
    [1, 0, 1, 0, 0, 1, 0], // 7
    [1, 1, 1, 1, 1, 1, 1], // 8
    [1, 1, 1, 1, 0, 1, 1]  // 9
].map(e => e.toString())


var result = 0;
for (let i = 0; i < inputRaw.length; i++)
{

    const [patterns, outputDigits] = inputRaw[i].split(' | ').map(e => e.split(' '))

    const knowDigits = {2:1, 3:7, 4:4, 7:8}
    var knownPatterns = new Array(10).fill('')

    var foundPattern = new Array(7).fill('')

    for (let j = 0; j < patterns.length; j++) {
        const patt = patterns[j];

        if (knowDigits[patt.length])
        {
            knownPatterns[knowDigits[patt.length]] = patt;   
        }
    }

    knownPatterns[6] = patterns.filter(e => e.length == 6).filter(f => !knownPatterns[1].split('').every(g => f.split('').includes(g)))[0]


    foundPattern[0] = knownPatterns[7].split('').filter(f => !knownPatterns[1].includes(f))[0]
    foundPattern[2] = knownPatterns[7].split('').filter(f => !knownPatterns[6].includes(f))[0]
    foundPattern[5] = knownPatterns[7].split('').filter(f => !foundPattern.includes(f))[0]


    var fiveSegmentDigit = patterns.filter(e => e.length == 5)
    knownPatterns[3] = fiveSegmentDigit.filter(f => knownPatterns[1].split('').every(g => f.split('').includes(g)))[0]
    knownPatterns[2] = fiveSegmentDigit.filter(e => e != knownPatterns[3]).filter(f => !f.split('').includes(foundPattern[5]))[0]
    knownPatterns[5] = fiveSegmentDigit.filter(e => e != knownPatterns[3]).filter(f => f.split('').includes(foundPattern[5]))[0]

    knownPatterns[9] = patterns.filter(e => e.length == 6).filter(f => knownPatterns[3].split('').every(g => f.split('').includes(g)))[0]
    knownPatterns[0] = patterns.filter(e => !knownPatterns.includes(e))[0]

    foundPattern[3] = knownPatterns[8].split('').filter(e => !knownPatterns[0].split('').includes(e))[0]
    foundPattern[1] = knownPatterns[9].split('').filter(e => !knownPatterns[3].split('').includes(e))[0]
    foundPattern[4] = knownPatterns[6].split('').filter(e => !knownPatterns[5].split('').includes(e))[0]
    foundPattern[6] = 'abcdefg'.split('').filter(e => !foundPattern.includes(e))[0]

    //console.log(knownPatterns);
    //console.log(foundPattern);

    //console.log(outputDigits)

    var foundNumber = ''
    for (const digit of outputDigits)
    {
        let digitValue = '0000000'.split('');
        for (const d of digit.split(''))
        {
            //console.log(d)
            let index = foundPattern.indexOf(d)
            if (index != -1)
            {
                digitValue[index] = 1;    
            }
        }

        let numericValue = digitSegments.indexOf(digitValue.toString());
        foundNumber += numericValue.toString();
    }

    //console.log(foundNumber)
    result += parseInt(foundNumber, 10)
}

console.log(result);




