// Higher order loops in JS
// 1. for...of
// 2. for...in
// 3. forEach

// function printName(name)
// {
//     return console.log(`Hello, How are you ${name}`);
// }

// printName("Sahil");
// printName("Siddhesh");
// printName("Ayush");
// printName("Parth");

function addNum(num1, num2)
{
    let n1 = Number(num1);
    let n2 = Number(num2);
    console.log(isNaN(num1));
    console.log(isNaN(num2));
    if(isNaN(n1) || isNaN(n2))
    {
        console.log("Enter your proper number: ");
    }
    return n1+n2;

}
console.log(addNum("10","20abc"));

