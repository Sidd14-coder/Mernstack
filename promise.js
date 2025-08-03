// function greet(){
//     return new Promise((resolve, reject) => {
//         // console.log("Hello World");
//         resolve("hello world");
//     })
// }


// async function greet(){
//     return "hello world";
// }
// console.log(greet());

// const userLoggedInStatus = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let isUserLoggedIn = true; // condition is true

//     if (isUserLoggedIn) {

//       console.log("user is logged in !!!!!!");
//       resolve({userName: "saideep", age: 23});
//       // Resolve the promise with user data

//     } else {

//       console.log("user logged in error");
//       reject("something went wrong");
//       // Reject the promise with an error message

//     }
//   }, 3000);
// });

// async function testPromise() {
//     try {
//         const result =  await userLoggedInStatus;
//         console.log("Data is : ",result);
//     } catch (error) {
//         console.log("error is:", error)
//     }
// }

// console.log(testPromise());

async function fetchApi() {
    try {
        result = await fetch('https://jsonplaceholder.typicode.com/todos');
        const res = await result.json();
        console.log(res);
    } catch(error){
        console.log("Error: ",error)
    }
    // const res = await result.json();
    // console.log(res);
}

console.log(fetchApi());

