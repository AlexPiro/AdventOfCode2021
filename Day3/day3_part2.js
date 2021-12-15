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

function CalculateLifeSupportRating(input)
{
    let oxygenArray = input.slice();
    let coArray = input.slice();
    
    for(let i=0; i< oxygenArray[0].length; i++)
    {
        let bitOne = 0;
        let bitZero = 0;

        for(let j=0; j< oxygenArray.length; j++)
        {
            if(oxygenArray[j][i] == "0")
                bitZero++
            if(oxygenArray[j][i] == "1")
                bitOne++
        }

        if(oxygenArray.length == 1)
        {
            break;
        }

        //console.log("BitOne : "+ bitOne + " bitZero : " + bitZero)

        let updatedArray = []
        if(bitZero > bitOne)
        {
            for(let k=0; k< oxygenArray.length; k++)
            {
                if(oxygenArray[k][i] == "0")
                {
                    //console.log("Add : ", oxygenArray[k])
                    updatedArray.push(oxygenArray[k])
                }
            }
        } else if(bitZero < bitOne)
        {
            for(let l=0; l< oxygenArray.length; l++)
            {
                if(oxygenArray[l][i] == "1")
                {
                    updatedArray.push(oxygenArray[l])
                }
            }
        } else
        {
            for(let l=0; l< oxygenArray.length; l++)
            {
                if(oxygenArray[l][i] == "1")
                {
                    updatedArray.push(oxygenArray[l])
                }
            }
        }

        oxygenArray = updatedArray;
    }

    let columnNumber = coArray[0].length
    for(let x=0; x<columnNumber; x++)
    {
        if(coArray.length == 1)
        {
            break;
        }

        let bitOne = 0;
        let bitZero = 0;

        for(let j=0; j< coArray.length; j++)
        {
            if(coArray[j][x] == "0")
                bitZero++
            if(coArray[j][x] == "1")
                bitOne++
        }

        console.log("BitOne : "+ bitOne + " bitZero : " + bitZero)

        let updatedArray = []
        if(bitZero > bitOne)
        {
            for(let k=0; k< coArray.length; k++)
            {
                if(coArray[k][x] == "1")
                {
                    console.log("Add : ", coArray[k])
                    updatedArray.push(coArray[k])
                }
            }
        } else if(bitZero < bitOne)
        {
            for(let l=0; l< coArray.length; l++)
            {
                if(coArray[l][x] == "0")
                {
                    console.log("Add : ", coArray[l])
                    updatedArray.push(coArray[l])
                }
            }
        } else
        {
            for(let l=0; l< coArray.length; l++)
            {
                if(coArray[l][x] == "0")
                {
                    updatedArray.push(coArray[l])
                }
            }
        }

        coArray = updatedArray;
    }

    let oxygenGeneratorRating = parseInt(oxygenArray[0], 2)
    console.log(oxygenGeneratorRating)

    let co2scrubberGeneratorRating = parseInt(coArray[0], 2)
    console.log(co2scrubberGeneratorRating)

    let lifeSupportRating = oxygenGeneratorRating * co2scrubberGeneratorRating;

    console.log(`Life support rating ${lifeSupportRating}`)

}

//CalculateEnergyReport(input2);
CalculateLifeSupportRating(input2)