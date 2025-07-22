console.log("Hello World");
var num =10;
num = 30;
console.log("before block scope", num);

{
    var num=20;
    console.log("inside block space",num);
}

console.log("after block space", num)