var btn = document.querySelector("#btn")

console.log(btn);

btn.addEventListener("click", function() {

    console.log("o usuário clicou");

    console.log(this);

    this.style.color = "red"
});