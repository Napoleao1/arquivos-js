document.addEventListener("keydown", function(event) {

    if(event.key === "Enter") {
        console.log("user press enter");
    }

    if(event.key === "Control"){
        console.log("user press ctrl");
    }
});


// keyup

document.addEventListener("keyup", function(e){

    if(e.key === "Enter"){
        console.log("user stop press enter")
    }
})