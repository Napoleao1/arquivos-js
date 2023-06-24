// criar elemento

var elemento = document.createElement("h3")
elemento.classList = "testando-classe"

var texto = document.createTextNode("Este é o texto do h3")

elemento.appendChild(texto);

console.log(elemento);

// selecionando o elemento que quero trocar