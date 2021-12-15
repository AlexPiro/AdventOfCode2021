const fs = require('fs');

const input1 = fs.readFileSync("input").toString().split("\n")
const input2 = fs.readFileSync("input2").toString().split("\n")

function CalculateEnergyReport(input)
{
    let gammaRate = [];
    let epsilonRate = [];

    console.log(input)
    let columnNumber = input[0].length
    for(let i=0; i< columnNumber; i++)
    {
        let bitOne = 0;
        let bitZero = 0;

        for(let j=0; j< input.length; j++)
        {
            if(input[j][i] == "0")
                bitZero++
            if(input[j][i] == "1")
                bitOne++
        }

        console.log(`Found ${bitZero} bitZero and ${bitOne} bitOne in column ${i}`)

        gammaRate[i] = bitZero > bitOne ? "0" : "1";
        epsilonRate[i] = bitZero < bitOne ? "0" : "1";

    }

    let gammaRateBinary = gammaRate.join('');
    let epsilonRateBinary = epsilonRate.join('');

    let gammaRateDecimal = parseInt(gammaRateBinary, 2);
    let epsilonRateDecimal = parseInt(epsilonRateBinary, 2);
    
    console.log(gammaRateBinary)
    console.log(epsilonRateBinary)
    console.log(gammaRateDecimal)
    console.log(epsilonRateDecimal)

    console.log("Power consumption : " + gammaRateDecimal*epsilonRateDecimal)

}


CalculateEnergyReport(input2);