// console.log('A');
// console.log('B');
// console.log('C');


//basic async operation 
// console.log('Start');

// setTimeout(()=>{
//     console.log('Async task done');
    
// },1000)//result will be printed after 1 sec in console 
// console.log('Stop');


function setTimeOutMulti(){
setTimeout(()=>{
    console.log('Async task done after 3 sec');
    
},3000)
setTimeout(()=>{
    console.log('Async task done after 1 sec');
    
},1000)
setTimeout(()=>{
    console.log('Async task done after 2 sec');
    
},2000)

}
// setTimeOutMulti()

//async await syntax
function delay (ms:number){
    return new Promise((resolve) => setTimeout(resolve,ms)) 
}

async function demo() {
   await delay(2000) //with await we wait to return the result , without await we will run all the rows immediately 
    console.log('2 sec delay');
    await delay(1000)
    console.log('1 sec delay');
}

//demo()

async function demoWithOutAwait() {
    delay(2000)
    console.log('2 sec delay');
    delay(1000)
    console.log('1 sec delay');
}

//demoWithOutAwait()

//get product data 
interface Rating{
    rate: number;
    count: number;  
}


interface Product{
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating:Rating
}

async function getData() {
    const response = await fetch("https://fakestoreapi.com/products/1");
    const data: Product = await response.json();
    console.log("Response:",response);
    console.log(`Title ${data.title}`);
    console.log(`Price ${data.price}`);
    console.log(`Category ${data.category}`);
        
    
}
getData()

//try catch finnaly 

try{
    const jsonData=JSON.parse('{"valid":true}')
    console.log(jsonData)
}catch (err){
    console.error("INVALID JSON FORMAT >>>> ",err)
}finally{
    console.log('JSON PARser ready');
    
}


//try/catch/finally exercise 

function divideNumbers(numOne:number,numtwo:number){

    try{
        if(numOne===0){
            throw new Error("Canot divide by zero!")
        }else{
            const result:number = numOne/numtwo;
            console.log(`Result is ${result}`);            
        }

    }catch(err){
        console.error(`Error ${err}`)
    }finally{
        console.log('Operation Done');
        
    }
}

divideNumbers(0,52)


export{};






