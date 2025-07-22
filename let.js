const num =10;

console.log("before block scope", num);

{
    const num=30;
    console.log("inside block space",num);
}

console.log("after block space", num)