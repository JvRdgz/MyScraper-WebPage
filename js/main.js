function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function date() {
    // Obtén la referencia al elemento <p>
    var parrafo = document.getElementById("fecha_vigencia");

    // Actualiza el contenido del párrafo con la fecha actual entre corchetes
    parrafo.innerHTML = "Fecha de vigencia: " + new Date().toLocaleDateString() + "";
}

function current_year() {
    // Obtén la referencia al elemento <p>
    var parrafo = document.getElementById("año_actual");

    // Actualiza el contenido del párrafo con la fecha actual entre corchetes
    parrafo.innerHTML = "&copy; " + new Date().getFullYear() + " MyScraper";
}

document.addEventListener("DOMContentLoaded", function() {
    current_year();
    date();
});