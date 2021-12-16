let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

let x = ["Banana", "Orange", "Apple", "Mango"];
x.splice(2,2);
console.log(x);

let y = ["Banana", "Orange", "Apple", "Mango"];
y.splice(2,2, "Chocolate");
console.log(y);

let a = ["Banana", "Orange", "Apple", "Mango"];
let b = a.slice(1, 3);
console.log(b);