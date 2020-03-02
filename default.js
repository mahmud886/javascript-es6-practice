function add(num1, num2 = 112){ //default parameter       function add(num1, num2 = 18){ num2 = 18 can't work..
    // if(num2 == undefined){                           return num1 + num2;
    //     num2 = 0;                                   }                    
    // } or                                            const total = add(12, 1);
    num2 = num2 || 20;                             //  console.log(total);
    return num1 + num2;
}
const total = add(12, 1);
console.log(total);