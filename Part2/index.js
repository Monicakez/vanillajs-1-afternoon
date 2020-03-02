console.log("The house always wins!")

let idInput = document.getElementById("idInput")
let colorInput = document.getElementById("colorInput")

function setCard(){
    let card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}
