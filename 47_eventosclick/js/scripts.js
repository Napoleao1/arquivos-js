// evento de mouseover
var title = document.querySelector("#title");

title.addEventListener("mouseover", function() {
    this.style.backgroundColor = "blue";
});



// evento de mouseout

title.addEventListener("mouseout", function(){

    this.style.backgroundColor = "white";
});