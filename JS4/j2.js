
//  self timeout method in js 

setTimeout( function ()  {
    console.log("Welcome to the  subham sarkars Embassy");
}, 2000);

let values = [250 , 645 , 300 , 900 , 50 ]
//  creating an itertor as index \\

let idx=0
for ( let val of values ) {
    console.log('Value at Index', {idx}, "is", {val});
    let offer= val /10
    values[idx] = values[idx] - offer
    console.log(`Value after offer = ${values[idx]}`);
    idx++
}

//  using only for loop 

for (let j=0 ; j < values.length ; j++) {
    let offer= values[j] /10
    values[j] -= offer
}

console.log(values);

//  splice method in js 

let numbers=[1,2,3,4,5,6]

const  change = numbers . splice(2,2,34,45)
console.log(numbers);
const c1= numbers .splice (2,0,99)
console.log(numbers);

function myadd ( x , y ) {

    let  z = x + y
    return z
}

const store =  myadd (6,6)
console.log( store );