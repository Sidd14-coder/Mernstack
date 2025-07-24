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

const person = {
    userName : "siddhesh",
    age : 20,
    greet : () => {
        console.log(this)
        return (this.userName)
    }
}

console.log(person.greet())