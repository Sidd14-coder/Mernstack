// const fruits = ["apple","banana","cherry"];
// for (const fruit of fruits)
// {
//     console.log(fruit.toUpperCase());
// }

// const students = ["Ravi","Priya","Amit"];
// // 1st method
// for (const student of students)
// {
//     console.log("Welcome, "+student+"!");
// }
// // 2nd method
// for (const student of students)
// {
//   console.log(`Welcome, ${student}!`);
// }

// const scores = [80,90,100];
// for (const score of scores)
// {
//     console.log(score * 2);
// }

// const numbers = [11,22,33,44,55];
// This forEach() is for to print Boolean values
// console.log(numbers.forEach((val) => {
//     console.log(val % 2 == 0);
// }))
// This forEach() is for to print the even numbers
// numbers.forEach(num => {
//   if (num % 2 == 0) {
//     console.log(num);
//   }
// });

// const user = {
//     name: "Rahul",
//     age: 24,
//     city: "Delhi"
// };
// for (let key in user)
// {
//     console.log(key + "=>" + user[key])
// }

const firstNames = ["Asha", "Vikram"];
const lastNames = ["Singh", "Sharma"];
let start = 0;
for (const names of firstNames)
{
    console.log(`${names} ${lastNames[start]}`);
    start++;
}
