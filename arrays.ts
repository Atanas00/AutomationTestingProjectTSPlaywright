let numbers: number[] = [1, 2, 3, 4];
let strings: string[] = ["a", "b", "c", "d"];
let mixed: (number | string)[] = [1, "a", 2, "b"];
//let pro: (any | undefined)[] = ["boolean",23,koko];
let pro: any[] = ["boolean", 23, true];

//access by index
console.log(numbers[0]);
console.log(numbers[1]);

console.log(strings[0]);
console.log(strings[1]);

console.log(mixed[0]);
console.log(mixed[1]);

console.log(pro[0]);

//array length
console.log("array length");
console.log(numbers.length);

//map method
console.log("MAP METHOD");
const map1: number[] = numbers.map((x) => x * 2);
console.log(map1);

console.log("MAP METHOD2");

let multiplysNums = numbers.map((num: number) => num * 2);
console.log(multiplysNums);

console.log("new added");
numbers.push(5);
console.log(numbers.length);
console.log(numbers[4]);

let stringsHi = strings.map((curName: string) => `Hello ${curName}`);
console.log("For Strings");
console.log(stringsHi);

console.log("hard");
let combinate = mixed.map((element: number | string) => {
  if (typeof element === "number") {
    return element * 10;
  }else{
    return `Welcome ${element}`
  }

})
  console.log(combinate);
;
