//for-each method 

const number:number[]=[10,20,30,40,50,60]
number.forEach((n:number,index:number)=>{
    console.log(`Index ${index}: value ${n}`);
    
})

// //sum nums
// let sum:number = 0 
// sum.forEach((number:number) =>{
//     sum = sum+number;
// })
// console.log(sum);

//active users
interface User {
    id:number,
    name:string,
    isActive:boolean;
}

// const user:User[]=[
//     {id:1 ,"Petar" ,true},
//     {id:2 ,"Tosho" ,false},
//     {id:3 ,"Gosho" ,true},
//     {id:4 ,"Gosho" ,false},
// ];

let isActiveIds:number[] = [];
    user.forEach((user:User)=>{
        if (user.isActive){
            isActiveIds.push(user.id)
        }
    })




export{};