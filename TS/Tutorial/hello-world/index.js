var _a;
console.log("Hello World");
var age = 20;
if (age < 50)
    age += 10;
var listNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
listNumbers.sort(function (a, b) { return a - b; });
var user = [1, "John"];
//Objects and Types
var employeeObject = { id: 1, name: 'Mary', retire: function (date) { console.log(date); } };
employeeObject.retire(new Date());
var employee = { id: 1, name: 'Mary', retire: function (date) { console.log(date); } };
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
var quantity = 50;
//Nullable Types
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hello You");
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
var customer = getCustomer(0);
if (customer !== null && customer !== undefined)
    console.log(customer.birthday);
//Optional property access operator
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear);
//Optional element access operator
// customers?.[0] 
//Optional Call
var log1 = function (message) { return console.log(message); };
var log2 = null;
log2 === null || log2 === void 0 ? void 0 : log2('a');
