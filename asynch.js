// // console.log("start");
// // setTimeout(() => {
// //     console.log("Timers");
// // },5000)
// // console.log("End");

// // console.log("1st");
// // setTimeout(() => {
// //     console.log("ayush");
// // },4000)
// // setTimeout(() => {
// //     console.log("sahil");
// // },2000)
// // console.log("4th");

// // console.log("1");
// // setInterval(() => {
// //     console.log("sahil");
// // },2000)

// // let count = 0;
// // const timer = setInterval(() => {
// //     console.log(`Count: ${count}`);
// //     count++;
// //     if (count>10)
// //     {
// //         clearInterval(timer);
// //     }
// // },2000)

// // function greet(callback) {
// //     console.log("Hello World");
// //     callback();
// // }

// // function sayBye() {
// //     console.log("goodbye");
// // }

// // greet(sayBye);
// // // console.log(sayBye());

// // function greet(name,callback) {
// //     console.log(`${name}`);
// //     setTimeout(last,3000)
// // }

// // function last() {
// //     console.log("Hello Guys!");
// // }

// // greet("Siddhesh", last);

// function sayHello(callback) {
//   setTimeout(() => {
//     console.log("Hello");
//     callback();
//   }, 3000);
// }

// function askHowAreYou(callback) {
//   setTimeout(() => {
//     console.log("How are you?");
//     callback();
//   }, 1000);
// }

// function sayGoodbye(callback) {
//   setTimeout(() => {
//     console.log("Goodbye");
//     callback();
//   }, 1000);
// }

// // Nested callbacks — callback hell
// sayHello(() => {
//   askHowAreYou(() => {
//     sayGoodbye(() => {
//       console.log("Conversation ended.");
//     });
//   });
// });

// let greet = new Promise((resolve, reject) => {
//     console.log("Hello");
//     resolve();
// });

// greet.then(() => {
//     console.log("bye");
// })

// const loggedInStatus = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let isLoggedin = true;

//         if(isLoggedin){
//             console.log("User is Logged");
//             resolve({"name": "Siddhesh"});
//         }
//         else{
//             console.log("user is not logged");
//             reject("Sorry");
//         }
//     },3000)
// })

// loggedInStatus.then((user) => {
//     console.log("After Logged In");
//     console.log(user);
// }).catch(() => {
//     console.log("Error");
//     console.log("Retry");
// }).finally(() => {
//     console.log("All Done");
// })

const promise1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Task 1 completed");
    }, 1000);
});

const promise2 = new Promise((reject, resolve) =>{
    setTimeout(() =>{
        resolve("Task 2 completed");
    }, 1000);
});

const promise3 = new Promise((reject, resolve) =>{
    setTimeout(() =>{
        reject("Task 3 completed");
    }, 1000);
});

Promise.all([promise1, promise2, promise3])
.then((results)=>{
     console.log("All Promises resolved!");
     console.log(results);
}).catch((error) => {
    console.log("One Promise Rejected");
    console.log(error);
}).finally(() =>{
    console.log("Code Executed");  
})

