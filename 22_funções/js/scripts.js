function primeiraFuncao() {
    console.log("Hello word das funções");
}
primeiraFuncao();
// ---------------------- // 

function dizerNome(nome){
    console.log("o nome é: " + nome);
}

dizerNome("Ernani");
dizerNome("Rafael");
dizerNome("Luiz");

var nomeDoBancoDeDados = "João";
dizerNome(nomeDoBancoDeDados);



function nomeJogo(jogo){
    console.log("O nome do jogo é: " + jogo);
}

var nomeDoJogo = "lol";
nomeJogo(nomeDoJogo);


// função de soma //

function soma(a, b) {
    var soma = a + b;
    return soma;
}

var somaUm = soma(2, 5);
console.log(somaUm);

var somaDois = soma ( 10, 24);
console.log(somaDois);

console.log(soma(20, 50));