function  calculategst ( productprice ) {
    return productprice * 0.5
}
console.log(calculategst(15));

let tax=50

function calculatetax (productprice)  {

    return productprice * (tax/100) + productprice
}

console.log(calculatetax(15));

function ofmultiplication ( x, y=2)  {

    return x*y
}

console.log(ofmultiplication(4));

//  creating an object 

let object =  {
    firstname:"Subham",
    lastname:"Sarkar",
    address:"Kolkata",

    fullName:function ()  {
     
        return this.firstname + " " + this.lastname + " " + "Lives in" + " " + this.address
    }
};

console.log( object.fullName());

//  anonymous function 

  var   greet = function  ()  {

    console.log(  " welcome to the embassy");
  }

//    calling the function

greet()

var ofgreet=  function ( platform )  {
     console.log( "Welome to ",platform);

}

ofgreet(" Coding Dojo ")