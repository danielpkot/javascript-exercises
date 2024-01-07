const sumAll = function(num1,num2) {
    console.log(typeof num1)
    if ((
        typeof num1) !== "number" || (typeof num2) !== "number" ||
        num1 < 0 || num2 <0){
        return "ERROR";
    }
    if (num1 > num2){
        let temp = num2;
        num2 = num1; 
        num1 = temp;
        console.log(num1)
        console.log(num2)
    }
    let counter = 0;
    for ( let i = num1; i <=num2; i++  ){
        counter += i;
    }
    return counter;
};

// Do not edit below this line
module.exports = sumAll;
