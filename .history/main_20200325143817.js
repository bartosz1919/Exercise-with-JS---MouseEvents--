const btn = document.querySelector("button");
const li = document.querySelectorAll("li");
const ul = document.querySelector("ul");
ul.style.position = "fixed";
let size = 0;
document.body.style.height = "10000px";

btn.addEventListener("click", () => {
    console.log(`dupa2`);
    for (let i = 0; i < li.length; i++) {
        li[i].style.display = "block";
        li[i].style.fontSize = `${size}px`;
        console.log(`dupa`);
    }
    size++;
});

document.body.addEventListener("scrool", () => {
    for (let i = 0; i < li.length; i++) {
        li[i].style.fontSize = `${size}px`;
    }

    console.log(`dupa3`);
    size--;
});