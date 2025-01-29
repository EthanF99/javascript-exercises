const palindromes = function (input) {
    let regex = new RegExp("[A-z0-9]");
    //remove whitespace/punctuation then make everything lowercase
    let forward = input.split("").filter((x) => {return regex.test(x)}).map((x) => x.toLowerCase());
    let backward = forward.toReversed();
    //convert to strings for comparison because array comparison comapares references 
    return forward.join("") === backward.join(""); 
};

// Do not edit below this line
module.exports = palindromes;
