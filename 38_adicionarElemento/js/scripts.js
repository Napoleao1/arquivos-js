// criar elemento


var elemento = document.createElement("div");

elemento.classList = "div-criada"

console.log(elemento);


// inserindo no container elemento filho

var container = document.querySelector("#container");

container.appendChild(elemento);


