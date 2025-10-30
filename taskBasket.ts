// We are going to build a small TypeScript program that describes a mini online shop. The goal is to represent a customer, their shopping cart, and calculate the total price. 
 
// Steps 
// 1.Create an interface Product with the following fields: 
// name: string  
// price: number  
// category: "food" | "clothes" | "electronics" 
// 2.Create a type Category with the possible categories (food, clothes, electronics) 
// 3.Create an interface Customer with the following fields: 
// name: string   
// email: string 
// cart: Product[] — an array containing the products in the customer’s cart 
// 4. Create two example products (e.g., an apple and a T-shirt). 
// 5. Create one customer who has both product



type CATEGORY = "food" |"clothes" | "electoronics"
type CARDPROVIDER = "Visa" | "MasterCard" | "Revolute"

interface CustomerData {
    customerId: number;
    customerName: string;
    purchasedProducts: Product[];
}

interface Product {
    name: string;  
    price: number;  
    category: CATEGORY;
}

const product:Product={
    name:'TV',
    price:100,
    category:"electoronics"
}

interface Customer{
name: string   
email: string 
cart: Product[]
}
const apple:Product={
    name:"apple",
    price:5,
    category:"food"    
}
const tshirt:Product={
    name:"T-shirt",
    price:35,
    category:"clothes"    
}
const TV:Product={
    name:'TV',
    price:100,
    category:"electoronics"
}
const sterio:Product={
    name:'sterio',
    price:59,
    category:"electoronics"
}
//add more products 
const products:Product[] = [apple,tshirt,TV,sterio]





//add second custumer 
const Ivan:Customer ={
    name: "Ivan",  
    email: "ex@abv.bg",
    cart: products,

}

//add function displayCart displаy cart customer name and products

function displayCart(cardProvider:CARDPROVIDER,customerName:string){
        console.log(`DisplayCardInfo: ${cardProvider} for User:${customerName}`);
        
}
displayCart("Visa","Bobi")

//add filterByCategory - receive products and categories as parameter and filter the products by given category 
function filterByCategory(products: Product[], category: CATEGORY): Product[] {

    return products.filter((product) => product.category === category);
}
const electronicProducts = filterByCategory(products,"electoronics");
const foodProducts = filterByCategory(products,"food");
const clothesProducts:Product[] = filterByCategory(products,"clothes");
console.log(foodProducts);






//add calculateTotalPrice - receive customer data and combinate all product price 
function calculateTotalPrice(customer: CustomerData): number {
    
    const total = customer.purchasedProducts.reduce((total, product) => {
        
        
        return total + product.price;
    }, 0); 

    return total;
}




export{}