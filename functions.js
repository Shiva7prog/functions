// Write a function add(a, b) that takes two numbers a and b as arguments and returns their sum.

function add(a,b){
        addition=a+b
        console.log(addition);
}
add(10,20)

// Write a function subtract(a, b) that returns the result of subtracting b from a.

function sub(c,d){
    subtraction=c-d
    console.log(subtraction);
}
sub(50,25)

// Write a function multiply(a, b) that takes two numbers and returns their product.

function mul(e,f){
    multiply=e*f
    console.log(multiply);
}
var e=prompt('enter e value: ');
var f=prompt('enter f value: ')
mul(e,f)
// Write a function divide(a, b) that returns the result of dividing a by b. If b is zero, the function should return a message saying "Cannot divide by zero.

function divide(g,h){
    if (h==0){
        console.log('cannot divide with 0');
    }
    else{
        console.log(g/h);
    }
}
divide(20,10)