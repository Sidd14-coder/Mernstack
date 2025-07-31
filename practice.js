// const isEven = (a) => {
//     if (a%2===0)
//     {
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(7))

// const isEven = a => a%2 === 0;
// console.log(isEven(8))

// function greet(user,age)
// {
//     return `My name is ${user}, and age is ${age}`;
// }
// console.log(greet("Siddhesh",20));

const welcome = (user="Guest") => {
    return "Welcome, " + user;
}
console.log(welcome());