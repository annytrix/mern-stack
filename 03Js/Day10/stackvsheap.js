// Execution Context
// Memory allocation
// a = 20
// b = 40
// addNumber = fnCode
// sumResult1 = undefined
// sumeResult2 = undefined

// Execution phase


// console.log(a);
// var a = 20;
// var b = 40;
// // console.log(a);

// // var sumResult1 = addNumber(a,b);
// console.log(sumResult1);

// function addNumber(num1,num2){
//     var sum = num1+num2;
//     return sum;
// }

// // var sumResult1 = addNumber(a,b);
// var sumResult2 = addNumber(4,5);
// // console.log(sumResult1,sumResult2);



// let const
// Memory allocation
// a = 20
// b = 40
// result = <uninitialised> (Temporal dead zone)
// addNumber = <uninitialised> (Temporal dead zone)

// Execution phase



let a = 20;
const b = 40;

const addNumber = function(num1,num2){
    const sum = num1+num2;
    return sum;
}
    const result = addNumber(a,b);
    console.log(result);