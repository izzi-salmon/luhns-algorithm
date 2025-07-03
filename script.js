// Luhn's algorithm
// Checks if number is a valid credit card.
// Double the value of every second digit
// If the result of the doubled digit is greater than 9, get the sum of the two digits eg. 8 * 2 = 16, 1 + 6 = 7
// Make a sum of all the final numbers
// If the last number of the sum is 0, it is a valid credit card

const input = document.getElementById("bankNumber");
const outputSum = document.getElementById("outputSum");
const outputResult = document.getElementById("outputResult");

function toNumberArray(inputNumbers){
    const numberArray = inputNumbers.toString().split("").map(
        function(digit){
            return parseInt(digit)
        }
    );

    return numberArray;
}

function getSumOfDigits(inputNumber) {
    const sumOfIntegers = Number(inputNumber.toString().charAt(0)) + Number(inputNumber.toString().charAt(1));
    return sumOfIntegers;
}

function checkNumber(input) {
    numbers = toNumberArray(input);

    // double every second number
    for (let i = 0; i < numbers.length; i+=2) {
        let newNumber = numbers[i] * 2;
        // For numbers greater than 9 after doubling, sum the two digits together
        if(newNumber > 9){
            newNumber = getSumOfDigits(newNumber);
        }

        // Replace the old number in the array with the new number
        numbers.splice(i, 1, newNumber);
    }

    // Sum the numbers
    let sum = 0;
    for (let j = 0; j < numbers.length; j++) {
        sum += numbers[j];
    }

    outputSum.innerHTML = sum;

    // Get the last character
    const stringifiedSum = sum.toString();
    const lastDigitOfSum = Number(stringifiedSum.charAt(stringifiedSum.length - 1));

    if(lastDigitOfSum === 0){
        return true;
    } else {
        return false;
    }
}

function checkIsCreditCard(){
    const result = checkNumber(input.value);

    if(result){
        outputResult.innerHTML = "Valid credit card";
    } else {
        outputResult.innerHTML = "Invalid credit card";
    }
}

input.addEventListener("blur", checkIsCreditCard);