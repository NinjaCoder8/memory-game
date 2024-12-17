const h2 = document.querySelector("h2");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const colors = [red, green, blue, yellow]; 

let current_level = 0; 
let game_pattern = []; 
let user_pattern = []; 

function randomElement(){
    return colors[Math.floor(Math.random()*colors.length)];
}
 function blink(element){
    const backgroundColor = getComputedStyle(element).backgroundColor; 
    element.style.boxShadow = "0px 0px 5px 10px grey";
    element.style.backgroundColor = "grey";
    setTimeout(() =>{
        element.style.backgroundColor = `${backgroundColor}`;
        element.style.boxShadow = "0px 0px 0px 0px";
    }, 100);
    
 }

 blink(randomElement());
