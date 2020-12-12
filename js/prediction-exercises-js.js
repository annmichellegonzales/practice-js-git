"use strict";
console.log("Hello");
console.log('1' + 2);
//prediction: '3'
//"12" (becomes string, treated as string)
console.log(typeof '1' + 2);
//prediction: string
//"string2" because it concatinates
console.log(6 % 4);
//prediction: 2. correct
console.log('3 + 4 is ' + 3 + 4);
//"3 + 4 is 34"
console.log('3 + 4 is ' + (3 + 4));
//to create "3 + 4 is 7"
console.log(0 < 0);
//prediction: false
console.log('false' == false);
//prediction: true
//false because string is not boolean?
console.log(typeof 'false');
console.log(true =='true');
//prediction: true?
//false because string is not boolean?
console.log(5 >= -5);
//prediction: false
//im not sure why! maybe because its greater than OR equal to
console.log(!false || false);
//prediction: false
//its true. OR statment.
console.log(true || "42");
//prediction: true. correct!
console.log(!true && false);
//prediction: false. correct!
console.log(6%5);
//prediction: 1. correct!
console.log(5 < 4 && 1 === 1);
//prediction: false. correct, order of operations
console.log(typeof 'codeup' === 'string');
//prediction: true. correct, both are strings.
console.log('codeup' === 'codeup' && 'codeup' === 'Codeup');
//prediction: false. correct, case sensitive
console.log(4 >= 0 && 1 !== '1');
//prediction: true. correct.
console.log(6 % 3 === 0);
//prediction: true. correct.
console.log(5 % 2 !== 0);
//prediction: false
//its true. didn't math right.



