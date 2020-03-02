// function doubleIt(num){
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);
//or

// const doubleIt = function myFun(num){
//     return num * 2;
// }
// const result = doubleIt(10);
// console.log(result);
//

//updated es6

const doubleIt = num => num * 2;
const result = doubleIt(20);
console.log(result);

// double parameter
const add = (x, y) => x + y;
const addResult = add(30, 50);
console.log(addResult);

//without parameter

const give5 = () => 5;
const give5Result = give5();
console.log(give5Result);

//
const doMath = (x, y) => {
    const sum = x + y;
    const sub = x - y;
    const resultDoMath = x * y;
    return resultDoMath;
}
const doMathResult = doMath(3, 4);
console.log(doMathResult);