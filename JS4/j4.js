//  foreach in javascript 

let ar =[ 1,2, 4, 3, 6, 5]

ar.forEach ( function ofcal ( value ) {
    console.log( value );

})
//  using arrow function 

ar.forEach ( (val) => {
    console.log( val );
} )  

let str = ["Kolkata"," Mumbai "," Delhi "," chennai "]
const able = str.forEach ( (ele , index ) => {
    let B1= ele.toUpperCase()
    console.log( B1 , index );
})

//  squaring of numbers using forEach

let num =[ 2,3,5,6 ]

 num . forEach ( function  ofsquare ( n ) {
    console.log( n*n );
 })


const a = [ "Hydrogen", "oxygen","Nitrogen","Methane"]

const a1= a . map ( function ( s ) {
    return s.length
});

console.log(a1);

//  using arrow function 

const a3 = a.map( ( s1 ) => {
    return s1.length
});

console.log( " The length is ", a3);