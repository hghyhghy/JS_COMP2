
function welcomemessage( name )  {

    return ("Hello"+ " " + name+ " "+"Welcome to escobars family")

}

let namevar="Admin"
console.log(welcomemessage(namevar));

function calladd ( x,y ) {

    let z= x + y
    return z
}
console.log( calladd (7,4));

const ofsubstarction = function  (a , b)  {

    let c= a - b
    return c
}
console.log(ofsubstarction(89,87));

const ofmultiplication = function ( a,b ) {
    
    let z= a*b
    return z
}
console.log(ofmultiplication(3,3));

//  call()  method in javascript 

 function  ofproduct ( a,b ) {
     return a * b
 }

let result= ofproduct.call(this,12,2)
console.log(result);

let obj = { a:12 , b:13 };
function sum ()  {
    return this.a + this.b
}

console.log(sum.call(obj));