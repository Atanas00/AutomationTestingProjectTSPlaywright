let numbers: number[] = [1, 2, 3, 4];
let strings: string[] = ["a", "b", "c", "d"];
let mixed: (number | string)[] = [1, "a", 2, "b"];

//access by index
console.log(numbers[0]);
console.log(numbers[1]);

console.log(strings[0]);
console.log(strings[1]);

console.log(mixed[0]);
console.log(mixed[1]);

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
  } else {
    return `Welcome ${element}`;
  }
});
console.log(combinate);
//16.10
//Filter
console.log("16.10");

let positiveNumbers: number[] = [2, 3, 4, 5, 6];
let filterArr: number[] = positiveNumbers.filter(
  (num: number) => num > 3 && num < 5
);
console.log(filterArr);

//Sort
let sortNums: number[] = [100, 2, 30, 5, 40, 6];

let sorted:number [] = sortNums.sort((a:number,b:number)=>a-b);
console.log(sorted);

//Push >>> add element to arr on last place
sorted.push(200);
console.log(sorted);

//pop >>> remove last element from arr 

sorted.pop();
console.log(sorted);

//shift remove first element from arr

sorted.shift();
console.log(sorted);

//unshift add new element on first place of arr 
// before [5, 6, 30, 40, 100]
sorted.unshift(1);
console.log(sorted);
//after [1, 5, 6, 30, 40, 100] 

