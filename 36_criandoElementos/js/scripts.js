var novoParagrafo = document.createElement("p");


var text = document.createTextNode("Este é o conteúdo do paragrafo");

novoParagrafo.appendChild(text);

console.log(novoParagrafo);


var body = document.querySelector("body");


body.appendChild(novoParagrafo);

console.log(body);

// inserir em container

var container = document.querySelector("#container");

console.log(container);

var elemento = document.createElement("span");

elemento.appendChild(document.createTextNode("Texto do span"));

container.appendChild(elemento);



