// type Aliace declaration 
type EmployeeName = string;
type EmployeeID = number;
type EmployeePosition= string;

type Result = string | number | null;

let data:Result = 'Test'; 

let responseData:Result =20;
let sum:Result = 50;

//type aliace with string literals 

type PaymentMethods = "cash" | "card" | "crypto";

function paymentDetails(amount:number,method:PaymentMethods){
    console.log(`Receive payment ${amount}$ in ${method}`);    
} 

paymentDetails(12,"cash")

//type alias and interface 
type ID = string | number
type Status = "Open" | "In progress" | "Done"
interface Tiket {
    id:ID;
    title: string;
    status: Status;
}
interface Email {
    id: ID;
    message:string;
}

const email:Email ={
    message: "Hello",
    id:"#4" 

}

const ticket = {
    id: 1,
    title : 'Send mail',
    status: 'Done'
}

