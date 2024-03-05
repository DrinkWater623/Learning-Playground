console.log("Hello World")

let age: number = 20;
if (age < 50)
    age += 10;

let listNumbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
listNumbers.sort((a, b) => a - b);

let user: [number, string] = [1, "John"];

//Objects and Types

let employeeObject: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = { id: 1, name: 'Mary', retire: (date: Date) => { console.log(date) } };

employeeObject.retire(new Date());

type EmployeeType = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
};

let employee: EmployeeType = { id: 1, name: 'Mary', retire: (date: Date) => { console.log(date) } }

//Union Types

function kgToLbs(weight: number | string): number {
    //Narrowing
    if (typeof weight === "number")
        return weight * 2.2;
    else if (typeof weight === "string")
        return parseInt(weight) * 2.2;
    else
        return 0;
}

console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));

//Intersection Types
//make 2 type and the 3rd type does an && on the first two types

//Literal Types
type Quantity = 50 | 100;
let quantity: Quantity = 50;

//Nullable Types
function greet(name: string | null | undefined) {

    if (name) console.log(name.toUpperCase());
    else console.log("Hello You");
}

greet(null);

//Optional Chaining

type Customer = { birthday: Date };

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);

if (customer !== null && customer !== undefined)
    console.log(customer.birthday);

//Optional property access operator
console.log(customer?.birthday);
console.log(customer?.birthday?.getFullYear);

//Optional element access operator
// customers?.[0] 

//Optional Call
let log1: any = (message: string) => console.log(message);
let log2: any = null;
log2?.('a');





