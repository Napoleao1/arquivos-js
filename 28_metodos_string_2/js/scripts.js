var frase = "Está é a frase que vou modificar";

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLowerCase());

// trim 

var nome = "         Ernani         ";

var nomeTrim = nome.trim();
console.log(nome);
console.log(nomeTrim);

// split

console.log(frase.split(" "));

var idiomas = "Inglês, Espanhol, Português, Japonês, Italiano";

console.log(idiomas.split(", "));

// last index of

var fraseRepetida = "eu tenho um computador rápido e um outro computador mais lento mas foi o meu primeiro computador";

console.log(fraseRepetida.indexOf("computador"));
console.log(fraseRepetida.lastIndexOf("computador"))