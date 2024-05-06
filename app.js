const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Get the button element
const btn = document.getElementById("btn");
// Get the color element
const color = document.querySelector(".color");

// Add event listener to the button
btn.addEventListener("click",()=>{
    //obtener un número aleatorio entre 0 y 3
    const randomNumber = getRandomNumber();
    // Seleccionado un elemento
    // del arreglo colors 
    const colorPicked = colors[randomNumber];
    //cambiar el color del body
    document.body.style.backgroundColor = colorPicked;
    // cambiar el color del text 
    color.textContent = colorPicked;
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}