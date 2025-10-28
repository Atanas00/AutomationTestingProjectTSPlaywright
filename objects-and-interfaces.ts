// //interface declaration 
// interface Car{
//     type:string;
//     model:string;
//     color:string;
//     horsePower:number;
// }
// // object declaration used interface Car
// const car:Car ={
//     type: "Fiat",
//     model: "500",
//     color: "Red",
//     horsePower:100
// };
// console.log(car);

// //interface for person Obj
// interface Pesron{
//     name:string;
//     lastName:string;
//     address:string;
//     age:number;
//     hobbies:string[];
//     greeting:() => string;
// }
// //object with method and array value
// const person:Pesron = {
//     name:"Ivan",
//     lastName:"Ivanov",
//     address:"Sofia",
//     age:30,
//     hobbies:["football","tennis","hiking"],
//     greeting: function (){
//         return 'Hello , my name is Ivan.'
//     },
// }
// console.log(person);
// //only name param
// console.log(person.name);
// person.name;
// person.age;
// person["address"]

// //call method from object 
// console.log(person.greeting());

// //properties redeclaration 
// person.age=35;
// console.log(person);

// //let vs const 
// let dog ={name:"Spark"}
// dog.name="Bobb"
// dog={name: "kik"}

// let cat = {name:"KIKI"}
// cat.name="BIb"
// //cat={name:"BIBI"};//error for const

// //Explicit ibject type 
// const mouse:{name:string,favFood:string,age:2} = {
// name:"Jerry",
// favFood:"chees",
// age:2
// }

// //interfaces- optional params ,read only and strings literals 

// interface User{
//     name:string;
//     readonly email:string;//with this >> readonly do propertie Readonly 
//     //string literals
//     role:"user" | "admin" | "superAdmin" | "superUser"//what params can be assigned 
//     //optional parameter for obj User 
//     job?:string;
//     password?:string|number;
// }
// const user:User = {
//     name:'Tommy',
//     email:"example@mail.com",
//     role:"admin",
//     job:'QA'

// }

// interface  UserPermission extends User{
//     permission:string
// }

// const user4:User = {
//     name:'Tommy',
//     email:"example@mail.com",
//     role:"admin",
//     job:'QA'

// }
// const user2:UserPermission = {
//     name:'Tommy',
//     email:"example@mail.com",
//     role:"admin",
//     job:'QA',
//     permission:'denied'
// }



//exercises Sum total price
interface Product{
    name:string;
    price:number;
    getTotalPrice: (quantity:number) => number;
}

const phone:Product ={
    name:'Nokia',
    price:100,
    getTotalPrice:function (quantity:number){
        return quantity * this.price
    }
}

function orderDetails(quantity:number,product:Product){
    
    console.log(`Order for:${product.name}`);
    console.log(`Quantity:${quantity}`);
    console.log(`Product unit price:${product.price}$`);
    console.log(`Total Price:${product.getTotalPrice(quantity)}$`);
    
    
        
}
orderDetails(5,phone)   



