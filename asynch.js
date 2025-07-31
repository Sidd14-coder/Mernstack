// console.log("start");
// setTimeout(() => {
//     console.log("Timers");
// },5000)
// console.log("End");

// console.log("1st");
// setTimeout(() => {
//     console.log("ayush");
// },4000)
// setTimeout(() => {
//     console.log("sahil");
// },2000)
// console.log("4th");

// console.log("1");
// setInterval(() => {
//     console.log("sahil");
// },2000)

// let count = 0;
// const timer = setInterval(() => {
//     console.log(`Count: ${count}`);
//     count++;
//     if (count>10)
//     {
//         clearInterval(timer);
//     }
// },2000)

// function greet(callback) {
//     console.log("Hello World");
//     callback();
// }

// function sayBye() {
//     console.log("goodbye");
// }

// greet(sayBye);
// // console.log(sayBye());

function greet(name,callback) {
    console.log(`${name}`);
    setTimeout(last,3000)
}

function last() {
    console.log("Hello Guys!");
}

greet("Siddhesh", last);
