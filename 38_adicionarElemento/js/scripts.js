// criar elemento


var elemento = document.createElement("div");

elemento.classList = "div-criada"




// inserindo no container elemento filho

var container = document.querySelector("#container");

container.appendChild(elemento);

//inserting before  - antes

var elemento2 = document.createElement("div");

elemento2.classList = "before";

var elemento3 = document.querySelector("#container .div-criada");
console.log(elemento3);

container.insertBefore(elemento2, elemento3);

var paragrafo = document.createElement("p");
console.log(paragrafo);

container.insertBefore(paragrafo, elemento2);


