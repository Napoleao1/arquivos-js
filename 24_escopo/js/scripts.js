// escopo global //

var x = 1;

var y = 2;

var nome = 'ernani';

console.log(x,y);
// escopo global //

// escopo  local //
function teste(){
    var z = 0;

    console.log(z);

    console.log(x);

    console.log(nome);
}

teste();




// if não possui escopo local//

if(true) {
    var p = 1;
}
console.log(p);