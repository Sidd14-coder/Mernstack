// Array
// let arr = ["John", "Casey", "Bob", "Mark"];

// console.log("Length: ", arr.length);

// console.log("Includes 'Bob': ", arr.includes("Bob"));

// arr.push("Elley");
// console.log("After Push: ", arr)

// arr.pop("Elley");
// console.log("After Pop: ", arr)

// console.log("Index of 'Mark: ", arr.indexOf("Mark"));

// const newArr = arr.filter(arr=>(arr.length>4));
// console.log("Filter: ", newArr);

// const newstringArr = arr.map((arr)=>(arr.toUpperCase()));
// console.log("After Map: ", newstringArr);

// const newwArr = ["Elley", "Freddie"];
// console.log("Before concat: ", arr)
// const allArr = arr.concat(newwArr);
// console.log("After Concat: ", allArr);

// const morearrName = [...arr, "Joe", "Harry"];
// console.log("Using Spread Operator: ", morearrName);

// String
// let userName = "Jacob";
// let userName1 = new String("Chris");
// console.log("Type: ", typeof userName);
// console.log("Type: ", typeof userName1);

// let user = "  Sean   ";
// console.log("After Trim: ", user.trim().length);

// let user1 = "Alaister";
// console.log("Length: ", user1.length)
// console.log("Char at index '3': ", user1.charAt(3));
// console.log("Uppercase: ",user1.toUpperCase());
// console.log("Lowercase: ", user1.toLowerCase());
// console.log("Index of 'ai': ", user1.indexOf('ai'));
// console.log("Includes 'er': ", user1.includes('er'));
// console.log(" After Replace: ", user1.replace("e","a"));

// let userName2 = "John$Root$Brook$James$Marnus";
// console.log(userName2.split('$'));

// let user2 = "Siddhesh";
// console.log("Substring (4,2): ",user2.substring(4,2));
// console.log("Substrig (-4,5): ",user2.substring(-4,5));
// console.log("Slice (4,2): ",user2.slice(4,2));
// console.log("Slice (-4,5): ",user2.slice(-4,5));

// Object
// const studentInfo = {
//         userName : "Siddhesh",
//         age : 19,
//     isLoggedIn : true
// }

// console.log(typeof studentInfo);
// console.log(typeof {});
// console.log(Object.keyss(studentInfo));
// console.log(Object.values(studentInfo));
// console.log(studentInfo["userName"]);
// console.log(studentInfo.userName);
// console.log(studentInfo.userName = "Mark");
// console.log(studentInfo.age = "20");
// console.log(studentInfo.email = "mark@gmail.com")
// console.log(Object.freeze(studentInfo));
// console.log(studentInfo.age = "25");
// console.log(Object.values(studentInfo));
// console.log(studentInfo.hasOwnProperty("phone"));
// console.log(Object.entries(studentInfo));

// Object
const studentInfo = {
    userName : "Siddhesh",
    age : 19,
    isLoggedIn : true
}

console.log("typeof Operator:");
console.log(typeof studentInfo);     
console.log(typeof {});              

console.log("Object.keys:");
console.log(Object.keys(studentInfo)); 

console.log("Object.values:");
console.log(Object.values(studentInfo)); 

console.log("Accessing Properties:");
console.log(studentInfo["userName"]);  
console.log(studentInfo.userName);      

console.log("Updating Properties:");
console.log(studentInfo.userName = "Mark");           
console.log(studentInfo.age = "20");          
console.log(studentInfo.email = "mark@gmail.com");        

console.log("Freezing the Object:");
console.log(Object.freeze(studentInfo)); 

console.log("Attempt to Modify Frozen Object:");
console.log(studentInfo.age = "25"); 

console.log("Object.values After Freeze:");
console.log(Object.values(studentInfo)); 

console.log("Checking Property Existence:");
console.log(studentInfo.hasOwnProperty("phone")); 

console.log("Object.entries:");
console.log(Object.entries(studentInfo));

console.log("Combining Objects with Object.assign():");
const formData = {
    name : "John",
    email : "johdoe@gmail.com",
    age : 25
};
const googleData = {
    email : "markcuban@gmail.com",
    profilePic : "https://example.com/profile.jpg",
    googleId : "123456789"
};
const googleData1 = {
    name : "Chris",
    age : 30
};

const combinedObj = Object.assign(formData, googleData, googleData1);
console.log(combinedObj);

console.log("Combining Objects with Spread Operator:");
const completeProfile = { ...formData, ...googleData, ...googleData1 };
console.log(completeProfile);

console.log("Object Destructuring from formData:");
const { name, email, age } = formData;
console.log(name);   
console.log(age);  
console.log(email);  