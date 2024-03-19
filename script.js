//alert("Hola este es mi Javascript");

//let nombre = "Marta";
//nombre = "maria"

//const nombre1 = "Marta";

//var nombre2 = "Marta";

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

// SELECCIONAR ELEMENTOS
document.addEventListener("DOMContentLoaded", function() {
    let titulo = document.querySelector(".logo a");
// Condicionales    
    if (titulo.innerText === "Nombre") {
        titulo.innerHTML = "Otro";
    } else {
        console.log("no se cumple");
    }
});

//FUNCIONES
// nombre = "walter";
let ciudad = "lima";
let comida = "arroz";

//let parrafo = document.querySelector(".parrofo2");

function cambiarTexto(nombre, ciudad, comida) {
    let contenido = `Me llamo ${nombre}, soy de ${ciudad}, me gusta el ${comida} -Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;
    return contenido;
}

//parrafo.innerText = cambiarTexto("walter", ciudad, comida);


//menu responsive
document.addEventListener("DOMContentLoaded", function() {
    let menu_responsive = document.querySelector(".checkbtn");
    let navbar = document.querySelector(".navbar");

    menu_responsive.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
});

//formulario
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});