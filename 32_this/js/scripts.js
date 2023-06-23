console.log(this);

let pessoa = {
    nome: "Ernani",
    idade: 22,
    falar: function() {
        console.log("Olá, você está bem?")
    },
    dizerNome: function() {
        console.log("O meu nome é " + this.nome);
    },
    aniversario: function() {
        this.idade += 1;
    },
     saudacao: function(){
        return 'Sr ' + this.nome;

    }
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();
pessoa.aniversario();
pessoa.aniversario();

console.log(pessoa.idade);


var sdc = pessoa.saudacao();
console.log("olá " + sdc);