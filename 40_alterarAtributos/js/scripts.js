var title = document.querySelector("#title");

title.setAttribute("class", "testando atributo");

console.log(title);

var p = document.querySelector("#paragrafo");

p.setAttribute("class", "testando novamente");

console.log(p);


// remover atributo

var lista = document.querySelector("#lista");

lista.removeAttribute("id");