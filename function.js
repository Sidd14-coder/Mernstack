// function printName(name)
// {
//     return console.log(`Hello, How are you ${name}`);
// }

// printName("Sahil");
// printName("Siddhesh");
// printName("Ayush");
// printName("Parth");

// function addNum(num1, num2)
// {
//     let n1 = Number(num1);
//     let n2 = Number(num2);
//     console.log(isNaN(num1));
//     console.log(isNaN(num2));
//     if(isNaN(n1) || isNaN(n2))
//     {
//         console.log("Enter your proper number: ");
//     }
//     return n1+n2;

// }
// console.log(addNum("10","20abc"));

// const val = 
// function addNum(num1,num2)
// {
//     console.log(num1);
//     console.log(num1+num2);
// }


// const arr = (num1, num2) => {
//     console.log(num1);
//     console.log(num1 + num2);
//     return num1,num2;
// }
// arr(10, 20);

// This = returns a object
// console.log(this)

// const person = {
//     userName : "siddhesh",
//     age : 20,
//     greet : () => {
//         console.log(this)
//         return (this.userName)
//     }
// }

// console.log(person.greet())

// function addNum(num1,num2){
//     return (num1+num2);
// }
// console.log(addNum(10,20));

// const greeting = () => ("Hello World");
// console.log(greeting());

// const addNum5 = num1 => num1+5;
// console.log(addNum5(10))

// function addNum(num1,num2){
//     let result = num1+num2;
//     return result;
// }
// console.log(addNum(10,20));

// const addNum = (num1,num2) => {
//     let result = num1+num2;
//     return result;
// }
// console.log(addNum(10,20));

// function showArgs() {
//     console.log(arguments);
// }
// console.log(10,20,30);

// Arrow functions don't have their own arguments object.
// const showArgs = () => (arguments)
// console.log(showArgs(10,20,30));

// const arr = [1,2,3,4,10,20,5,50];
// for(let i=0;i<=arr.length;i++)
// {
//     if (arr[i]>4)
//     {
//         console.log(arr[i]);
//         newarr.push(arr[i])
//     }
// }
// console.log(newarr);

// const arr = [1,2,3,4,10,20,5,50];
// const newarr = arr.filter((value)=>(value>4));
// console.log(newarr);

// const stringArr = ["sai","ram","shyam","ishwar"];
// const newstringArr = stringArr.filter((str)=>(str.length>3));
// console.log(newstringArr);

// const arr = [1,2,3,4,5,6];
// const newarr = [];
// for(const num of arr)
// {
//     newarr.push(num*10)
// }
// console.log(newarr);

// const arr = [1,2,3,4,5,6];
// const newarr = arr.map((val) => (val*10));
// console.log(newarr);

// const stringArr = ["sai","ram","shyam","ishwar"];
// const newstringArr = stringArr.map((str)=>(str.toUpperCase()));
// console.log(newstringArr);

// const studentInfo = {
    //     userName : "Sai",
    //     age : 23,
//     isLoggedIn : true
// }

// console.log(typeof studentInfo);
// console.log(typeof {});
// console.log(Object.values(studentInfo));
// console.log(studentInfo.userName = "saideep");
// console.log(studentInfo.age = "20");
// // console.log(studentInfo["userName"]);
// console.log(studentInfo.email = "sai@gmail.com")
// console.log(Object.freeze(studentInfo));
// console.log(studentInfo.age = "25");
// console.log(Object.values(studentInfo));
// console.log(studentInfo.hasOwnProperty("phone"));
// console.log(Object.entries(studentInfo));

// const obj1 = {
//     a:'1',
//     b:'2'   
// }

// const obj2 = {
//     c:'3',
//     d:'4'   
// }

// const obj3 = {
//     e:'5',
//     f:'6'   
// }

// const combinedObj = Object.assign(obj1,obj2,obj3);
// console.log(combinedObj);

// const formData = {
//     name : "ram",
//     email : "ram@gmail.com",
//     age : 25
// };
// const googleData = {
//     email : "saidepp@gmail.com",
//     profilePic : "https://example.com/profile.jpg",
//     googleId : "123456789"
// };

// const googleData1 = {
//     name : "ganesh",
//     age : 30
// }

// const completeProfile = {...formData,...googleData,...googleData1};
// console.log(completeProfile);

// const {name,email,age}=formData;
// console.log(name);
// console.log(age);
// console.log(email);

// const fruits = ["apple","banana","apple","orange","banana"];
// const count = fruits.reduce((acc,fruit)=>{
//     acc[fruit] = (acc[fruit] || 0)+1;
//     // console.log(acc);
//     return acc;
// },{});

// console.log(count);

const arr = [10,20,30,40,50];
const add = arr.reduce((acc,num) => (acc + num),0);
console.log(add);

