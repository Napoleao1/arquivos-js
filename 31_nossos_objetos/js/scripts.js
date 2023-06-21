let pessoa = {
    nome: "Ernani",
    idade: 22,
// criar método
    falar: function() {
        console.log("Olá, você está bem?")
    },

    meditar: function() {
        console.log("Olá você meditou hoje?")
    },
    soma: function(a, b) {
        return a + b;
    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);

pessoa.falar();
pessoa.meditar();

var soma = pessoa.soma(2, 5);
console.log(soma);