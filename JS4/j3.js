
//  arrow function in js 

const ofadd = ( x , y ) => {
    let z= x+y
    return z
}

console.log( ofadd ( 6,6 ));

const ofmul = ( a, b ) => {
    let x = a *  b
    return x
}
console.log( ofmul ( 5,4 ));

//  counting vowels using  function 

let vowel ="aeiou"

let empty=[]

let count=0

function ofvowel (  str ) {
    let count =0 
    for ( let ele of str ) {
        
        if ( ele === "a" || ele === "e" || ele === "i" || ele === "o" || ele === "u")
        {
            count ++
        }
    }

    console.log( count );
}
ofvowel ("subhamsarkar")

//  using arrow func

const ofget = ( s1 ) => {
    let count =0 
    for ( let ele of s1 ) {
        
        if ( ele === "a" || ele === "e" || ele === "i" || ele === "o" || ele === "u")
        {
            count ++
        }
    }

    console.log( count );
}

ofget("shreysohi")