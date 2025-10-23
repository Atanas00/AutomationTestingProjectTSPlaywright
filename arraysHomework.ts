//Task1
let addNewLastElement: string[] = ["a", "b"];
addNewLastElement.push("c");
console.log("addNewLastElement");
console.log(addNewLastElement);
//Task2
let removeFirstElement: string[] = ["a", "b"];
removeFirstElement.pop();
console.log(removeFirstElement);
//Task3
let devideEachByTwo: number[] = [1, 2, 3, 4, 5];
const alreadyDevided: number[] = devideEachByTwo.map((x) => x / 2);
console.log(alreadyDevided);
//Task4
let greaterFromFive: number[] = [1, 3, 4, 5, 6, 7, 8, 9, 100];
let filterArr: number[] = greaterFromFive.filter((num: number) => num > 5);
console.log(filterArr);
//Task5
let notSortedNum: number[] = [100, 2, 30, 5, 40, 6];
let sortedNum: number[] = notSortedNum.sort((a: number, b: number) => a - b);
console.log(sortedNum);
//Task6
let arr: string[] = ["apple", "banana", "cherry", "date", "elderberry"];
let val: string[] = arr.slice(0, 3);
console.log(val);
//Task7
let cars = ["car", "bike", "bus", "train", "boat"];
cars.splice(1, 2);
console.log(cars);
//Task8
function findLargest(num1: number, num2: number, num3: number): number {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

let largestNumber = findLargest(15, 22, 10);
console.log("The largest number is:", largestNumber);
//Task9
function convertToCentimeters(inches = 10) {
  const conversionFactor = 2.54;
  return inches * conversionFactor;
}
let defaultConversion = convertToCentimeters();
console.log(`Default (10 inches): ${defaultConversion} cm`);
//Task10
function calculateArea(width: number, height: number) {
  return width * height;
}
let areaRectangle = calculateArea(10, 5);
console.log(`Area of rectangle (10x5): ${areaRectangle}`);
