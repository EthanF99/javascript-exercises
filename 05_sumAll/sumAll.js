const sumAll = function(a, b) {
    let total = 0;
    let bigger = a;
    let smaller = b;
    if (b > a){
        bigger = b;
        smaller = a;
    }
    if (b < 0 || a < 0 || !Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR";
    }
    while(smaller <= bigger){
        total += smaller;
        smaller++;
    }
    return total;

};

// Do not edit below this line
module.exports = sumAll;
