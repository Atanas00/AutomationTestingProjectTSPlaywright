// //functions
// function displayPersonalData(name: string, age: number) {
//   return `${name} is ${age} years old.`;
// }
// displayPersonalData("Ivan", 20);

// console.log(displayPersonalData("Ivan", 20));
// const personalData: string = displayPersonalData("Petar", 60);
// console.log(personalData);

// //Void method
// function greetingVoid(): void {
//   console.log("Void method/function");
// }
// greetingVoid();

// function divideNumbers(num1: number, num2: number): number {
//   console.log(num1, num2);

//   return num1 / num2;
// }
// console.log("dividenumbers");
// console.log(divideNumbers(10, 5));
// divideNumbers(50, 5);

// //Arrow function
// const square = (x: number, y: number) => x * y;
// square(2, 2);
// console.log(square);

// //function with optional parameter >>example a:string,b?:number

// function bla(name: string, age?: number) {
//   if (age) {
//     return `HI ${name} am ${age} old`;
//   }
//   return `HI ${name}`;
// }

// let a:string =bla("Pesho");
// console.log(a);
// console.log(bla("Pesho"));

// let b:string =bla("Pesho",22);
// console.log(b);

//function with default parameters 
function gaga(a:number=6,b:number=1){
    return a+b;
} 
console.log(gaga(10,20));
console.log(gaga());


