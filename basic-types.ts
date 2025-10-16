// let vs const
let num: number = 5;
num = 10;
num = 15;

const welcomeMssg: String = "Welcome";
// welcomeMssg = 'new Welcome'
// Cannot assign to 'welcomeMssg' because it is a constant.

//String
let message: string = "Hello, Peter!";

//return string length
let messageLength: number = message.length;
console.log(messageLength);

//String interpolation
let welcomeMessageDetails: string = `Text message length is ${messageLength}`;
console.log(welcomeMessageDetails);

//number and number operation
let numOne: number = 10;
let numTwo: number = 5;

let add: number = numOne + numTwo;
let substract: number = numOne - numTwo;
let multiply: number = numOne * numTwo;
let devide: number = numOne / numTwo;

//boolean types (true | false)
let areEqual: boolean = numOne === numTwo;
let isGreater: boolean = numOne > numTwo;
let isGreaterOrEqual: boolean = numOne >= numTwo;
console.log("are Equal", areEqual);

//logical operation
let areEqualTo: boolean = numOne == 10 && numTwo == 5;
let areEqualTo2: boolean = numOne == 10 && numTwo == 6;
console.log("areEqualTo", areEqualTo);
console.log("areEqualTo", areEqualTo2);
let isAnyNumEqualTo: boolean = numOne == 10 || numTwo == 5;
console.log("isAnyNumEqualTo", isAnyNumEqualTo); //true
let isAnyNumEqualTo2: boolean = numOne == 12 || numTwo == 6;
console.log("isAnyNumEqualTo2", isAnyNumEqualTo); //false

//conditiions

//ternary operator
5 === 5 ? "true result" : "false result";
"Hello" === "Hello" ? "true result" : "false result";

let PositiveNumCompareMessage: string =
  numOne >= 0 ? `Number ${numOne} is positive` : "Number is negative";
console.log(PositiveNumCompareMessage);

//if / else

    
// if (numOne > 3) {
//   console.log("numOne is greater than 3");
//   console.log(numOne);
// } else {
//   console.log("numOne is not greater than 3");
// }

const num3: number = 100; 
if (num3 <=10) {
  console.log("num3 is less or equal to 10");
  console.log(numOne);
} else if (num3 > 50) {
  console.log("num3 is greater than 50");
}else{
    console.log("numOne is not greater than 3")
}



