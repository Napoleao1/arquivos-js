// criar elemento

var elemento = document.createElement("h3")
elemento.classList = "testando-classe"

var texto = document.createTextNode("Este é o texto do h3")

elemento.appendChild(texto);

console.log(elemento);

// selecionando o elemento que quero trocar

var title = document.querySelector("#title");
console.log(title);

// selecionar o pai do elemento

// var body = document.querySelector("body");
 var pai = title.parentNode; // para puxar o  elemento pai

// trocar os elementos

pai.replaceChild(elemento, title); // troquei o h1 pelo h3


var paragrafo = document.createElement("p");

paragrafo.classList = "classe-paragrafo";

var texto2 = document.createTextNode("testando agora com paragráfos");

paragrafo.appendChild(texto2);

console.log(paragrafo);

var pai2 = elemento.parentNode;

pai2.replaceChild(paragrafo, elemento);

