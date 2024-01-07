

console.log( " Hello Visitors ");
alert (" Welcome to NicolasDb Corporation ")
console.dir(document.body)
console.dir(document.body.childNodes[1])


let button = document . getElementById ("myid");
console.dir( button );

let headings_js = document .getElementsByClassName ( " heading ");
console.dir( headings_js )
console.log( headings_js );

let paragraphs = document . getElementsByTagName ( "p" )
console.dir( paragraphs );

//  using quaery selector 

let elements = document .querySelector ( "p" );
console.dir ( elements )

let all_elements = document . querySelectorAll ( "p" )
console.dir( all_elements )
//  sccessing the class 

let all = document . querySelector ( " .heading ")
console.dir( all )

//  accessing the id 

let id = document . querySelector ( " #myid ");
console.dir ( id )

console . dir ( document . body . firstChild)

let mydiv = document . querySelector ( "div" ) . innerText ;
console . dir ( mydiv )

let my1 = document . querySelector ( "div" ) . innerHTML ;
console.dir ( my1 )
//  manipulating text using textContent

// document . querySelector ( "div" ) . textContent =" My fruits"

let heading = document . querySelector ( "h1 ");
heading.textContent = " New Heading "
heading.innerHTML = " <i> New Heading </i> "

let  tag = document . querySelector ("h2");
console . dir ( tag. innerText ) 
tag . innerText += " From Subham Sarkar "

let diving = document .querySelectorAll ( " .box ");
console.log( diving [0]);
console.log( diving [1]);
console.log( diving [2]);

let index = 0 

for ( div of diving ) {

    div . innerText = `My unique text for div ${index}`
    index ++
}

let d0 =  document . querySelector ( "div" );
console.log( d0 );

//  accessing the value of ths id using getattribute 

let value = d0 . getAttribute ( "id" )
console.log( value );

let value1 = d0 .getAttribute ( "name" )
console.log( value1 );

//  accessing the class name of the paragraph tag 

let d1= document .querySelector ( "p" )
console.log( d1.getAttribute ("class"));

//  manipulating the class name 

let d2 = document . querySelector ( "p" )
console.log( d2 .  setAttribute ("class","newclass"));

let d3= document . querySelector ("div")
console.log( d3.style );
d3.style.backgroundColor="purple"
d3.style.color="white"
d3.style.fontSize="26px"

//  creating button using javascript 

let button1 = document .createElement ( "button" )
button1 . innerText = " click Me "
console.log( button1 );

//  showcasing the button on the screen 

let d4= document . querySelector( "p" )
d4.after ( button )

let d5 = document .createElement ("h1")
d5.innerHTML = "<i> Hey I am New </i> " 
document . querySelector ( "body" ) .prepend ( d5 )

//  deleting element 

let d6 = document . querySelector ( "p" )
d6.remove()

let newbtn = document . createElement ( "button" )
newbtn . innerText = " Click Me "
newbtn .style .color = " white "
newbtn . style . backgroundColor = " red "
document . querySelector (" body ") . prepend ( newbtn )
let d7 = document . querySelector ( "p" )
d7.classList.add("newclass")