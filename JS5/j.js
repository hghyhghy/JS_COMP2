
let array = [ 1,2,3,4 ]
const ofcal = array . reduce ( (front,back) => {
    return front + back 
});

console.log( ofcal );

//  accessing the largest element from the array

let num = [ 12, 45 , 11, 10 ,1, 7]
const oflargest = num . reduce (  ( previous , current ) => {
    return previous > current ? previous : current 
});

console.log( oflargest );

let marks =[  98, 56, 34, 78, 99, 89, 98 ]
console.log( "The array of the marks are ", marks);

let listoftopper = marks . filter  ( ( ofmarks ) => {
    return ofmarks > 90
});

console.log( listoftopper );

const prompt = require ("prompt-sync") ();

let n = prompt ("Enter A Number")
let array1 =[]
for ( let j = 0 ; j <=n ; j++) {
    array1[j] = j
}

console.log( array1 );

//  finding the sum of the array elements using  reduce 

let sum = array1 . reduce (( previous , current ) => {
    return previous + current
});

console.log( sum  );

//  finding the multiplication of the array elements using  reduce 

let multiplication = array1 . reduce ( ( p , c ) =>{

    return p * c
});

console.log( "Multiplication of the number is ", multiplication);