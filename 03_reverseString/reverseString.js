const reverseString = function(input) {
    let inputArray = input.split("")
    inputArray.reverse();
    return inputArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
