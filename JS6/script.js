
let btn1 = document .querySelector ("#btn1");
btn1.onclick = () =>{
  let  black = document . body;
  black.classList.toggle("dark-mode")

}
//  accessing the div 
let div = document .querySelector ( "div" )
//  using addeventlistener

div.addEventListener("mouseover",() => {
    console.log( "You are inside of the div ");
});

// accessing the button using addeventlistener 

let mode = document .querySelector ("#Theme");
let curr_mode ="light-mode"
mode .addEventListener ("click", () => {
    if ( curr_mode === "light-mode") {
        curr_mode = "dark-mode"
        document .querySelector ( "body" ) .style .backgroundColor = "black"
        document .querySelector ( "body" ) .style .color = "blue"

    } else 
    {
        curr_mode = "light-mode"
        document .querySelector ( "body" ) .style .backgroundColor = "white"
        document .querySelector ( "body" ) .style .color = "black"


    }

    console.log( curr_mode );
});

let m = document .querySelector ( "#m" );
m .onclick = () => {
    let b = document .querySelector ("#m");
    b.classList.toggle("change")
}
