const btn = document.querySelector("button");
const li = document.querySelectorAll("li");
let number = 0;


btn.addEventListener("click", () => {

    console.log('dupa');

    for (let i = 0; i < li; i++) {
        li[i].style.display = "block";
    }



})