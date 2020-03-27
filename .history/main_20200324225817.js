const btn = document.querySelector("button");
const li = document.querySelectorAll("li");
let size = 10;


btn.addEventListener("click", () => {



    for (let i = 0; i < li.length; i++) {
        li[i].style.display = "block";
        size++;
        console.log('dupa');

        li.style.fontSize = size + "px;"

    }



})