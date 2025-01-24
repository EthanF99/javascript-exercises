const removeFromArray = function(input, ...remove) {
    let output = [];
    for(let i = 0; i < input.length; i++){
        let pass = true;
        for(let j = 0; j < remove.length; j++){
            if (input[i] === remove[j]){
                pass = false;
            }
        }
        if (pass){
            output.push(input[i]);
        }
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
