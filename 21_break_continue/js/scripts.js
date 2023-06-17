for(var i = 15; i > 0; i--){
    
    console.log(i);
    if(i === 10){
        break;
    }
}


console.log("gave the break");

var x = 10;

while(x < 100) {

    x+= 10;

    if(x === 60 || x === 90) {
        console.log("Continue")
        continue;
    }
    console.log("Testing loop continue " + x);

}