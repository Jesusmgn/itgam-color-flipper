const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Obtener el elemento del botón
const btn = document.getElementById("btn");
// Obtener el elemento del color
const color = document.querySelector(".color");

// Agregar un event listener al botón
btn.addEventListener("click",()=>{
    // Generar un color hexadecimal aleatorio
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    // Cambiar el color de fondo del body
    document.body.style.backgroundColor = hexColor;
    // Cambiar el color del texto
    color.textContent = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}