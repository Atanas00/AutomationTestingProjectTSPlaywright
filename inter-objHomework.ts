interface Pesron{
    name:string;
    lastName:string;
    address:string;
    age:number;
    email:string,
    phoneNumber:number;
}

interface PersonInfo extends Pesron {
    country?: string; // Optional string property
    greeting?: () => string; // Optional method that returns a string
}

const person1: Pesron = {
    name: "Alex",
    lastName: "Johnson",
    address:"bla2",
    age: 35,
    email: "alex.j@example.com",
    phoneNumber: 5551234567, // Assuming 10 digits for simplicity
};

console.log("--- Person Object ---");
console.log(person1);

const person2: PersonInfo = {
    name: "Maria",
    lastName: "Garcia",
    address:"bla",
    age: 28,
    email: "maria.g@work.net",
    phoneNumber: 5559876543,
    // Optional properties included:
    country: "Spain",
    greeting: function(): string {
        return `Hello! My name is ${this.name}.`;
    }
};

console.log("\n--- PersonInfo Object ---");
console.log(person2);
if (person2.greeting) {
    console.log("Greeting Message:", person2.greeting());
}