"use strict";
console.log("Hello World");
let age = 20;
if (age < 50)
    age += 10;
let listNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
listNumbers.sort((a, b) => a - b);
let user = [1, "John"];
//Objects and Types
let employeeObject = { id: 1, name: 'Mary', retire: (date) => { console.log(date); } };
employeeObject.retire(new Date());
let employee = { id: 1, name: 'Mary', retire: (date) => { console.log(date); } };
//Union Types
function kgToLbs(weight) {
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
let quantity = 50;
//Nullable Types
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hello You");
}
greet;
//# sourceMappingURL=index.js.map