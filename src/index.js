module.exports = function toReadable(number) {
    let numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let dozens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let result = "";
    let n = number;
    let counter = 1;
    if (n === 0 ) {
        result = numbers[n];
    }
    while (n > 0) {
        switch (counter) {
            case 1: {
                if (n % 10 > 0) {
                    result = numbers[n % 10];
                }
                break;
            }
            case 2: {
                if (n % 10 === 1) {
                    result = teens[number % 10] + " ";
                } else {
                    result = dozens[n % 10] + " " + result;
                }
                break;
            }
            case 3: {
                result = numbers[n % 10] + " hundred " + result;
                break;
            }
        }
        n = (n - (n % 10)) / 10;
        counter++;
        result = result.trim();
    }
    return result;
};
