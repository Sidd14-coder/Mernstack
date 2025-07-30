// const greet = () => {
//     return "Hello!";
// }
// console.log(greet());
// const greet = () => "Hello!";
// console.log(greet());

// const square = (s) => {
//     return s*s;
// }
// console.log(square(5));
// const square = num => num * num;
// console.log(square(5));

// const add = (a,b) => {
//     return a+b;
// }
// console.log(add(10,14));
// const add = (a, b) => a + b;
// console.log(add(10,14));

// const isEven = (s) => {
//     if (s%2===0){
//         return true;p
//     } else {
//         return false;
//     }
// }
// console.log(isEven(6));
const isEven = num => num % 2 === 0;
console.log(isEven(6));

// const person = {
//     name : "Siddhesh",
//     greet : () => {
//         return `hello world,${this.name}`;
//     }
// };
// console.log(person.greet())

// const isPositive = (s) => {
//     if (s>0){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isPositive(-7));
// const isPositive = num => num > 0;
// console.log(isPositive(-7));

// const greet = (naame) => {
//     console.log("Hello, " + naame)
// } 
// console.log(greet("Siddhesh"));

// const getUser = (namee, age) => {
//     return{
//         namee: namee,
//         age: age
//     };
// }
// console.log(getUser("Siddhesh", 20));
// const getUser = (name, age) => ({
//       name,
//       age
//    });
// console.log(getUser("Siddhesh", 20));

// const welcome = (user = "Guest") => {
//     return "Welcome, " + user;
// }
// console.log(welcome());
// const welcome = (user = "Guest") => "Welcome, " + user;
// console.log(welcome());  