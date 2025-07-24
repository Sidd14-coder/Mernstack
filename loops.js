// Higher order loops in JS
// 1. for...of
// 2. for...in
// 3. forEach


// let user = "ganesh";
// for(let i=0;i<user.length;i++)
// {
//     console.log(user[i]);    
// }

// for...of loop = It gives value. It is applicable for string, array, map (Build-in object). Not Applcable for object.
// Syntax :- for(const ______ of _________){
//    console.log(_)
// }
// let user = "ganesh";
// for(const char of user)
// {
//     console.log(char);
// }

// Scope = It determines the accesssbility (visibility) of variables.
// Types of Scopes :- Global Scope, Local Scope
// Types of Local Scope :- function scope, block scope
// Variables declared outside of any function or block are in the global scope

// let globalVar = "I'm global";

// const arrayName = [1,2,3,4];
// console.log(typeof const);
// console.log(const arrayName = new [1,2,3,4]);

// const user = [10,20,30,40];
// let user = "saideep";
// const user1 = [1,2,3,4];
// console.log(user.concat(user1));
// console.log([...user,...user1]);
// console.log(Array.isArray(user1));
// console.log(Array.isArray(user));
// console.log(Array.from(user));

// let num=10;
// let num1=20;
// let num2=30;
// console.log(Array.of(num,num1,num2));

// Slicing in array
// console.log(user1.slice(0,3));
// console.log(user1.splice(0,3));

// Slice = Used to extract a portion of array without modifying the original array
// const user = [10,20,30,40,50,60,70];
// console.log("Before ", user);
// const newArr = user.slice(0,3);
// console.log("After ", newArr);
// console.log("After ", user);

// Splice = It modifies original array
const userName1 = [10,20,30,40,50,60,70];
// console.log("Before ", userName1);
// const newArr1 = userName1.splice(0,3);
// console.log("After ", newArr1);
// console.log("After ", userName1);


// for...of Array
// for(const arr of userName1)
// {
//      console.log(arr);
// }

// for...in = It gives key(indexVal). It is applicable for object and array. Not applicable for map(Build-in object)
const userId = [10,20,30,40,50];
// for(i=0;i<userId.length;i++)
// {
//     console.log(userId[i]+5);
// }

// console.log(userId.forEach(function add5(val)
// {
//     console.log(val+5);
// }));

console.log(userId.forEach((val) => {
    console.log(val + 5);
}))
