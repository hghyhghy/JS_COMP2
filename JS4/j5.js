

//  example of arrow functions in js 

const number = ( a , b ) => {
     let c = 5

     let result = ( a + b ) * c;

     return result
};

console.log( number ( 2 , 3 ));

//  taking the square of the numbers using forEach 

let nums= [ 12, 20 , 13 ]
let calculte_square = ( num ) => {

    console.log( num * num );
}

nums.forEach( calculte_square )

//  using map in js

const B1 = nums . map(  (val )=> {
    console.log( val )
} );

const B2 = nums . map (  ( n ) => {
    console.log( n * 2 );

});
//  printing even numbers from the list

let array =[ 1,2,4,5,6,7,8,90]

let evenArray = array . filter ( ( temp ) => {
    
    if ( temp % 2 === 0 && temp > 3) {
        return temp
    }
});

console.log( evenArray );



