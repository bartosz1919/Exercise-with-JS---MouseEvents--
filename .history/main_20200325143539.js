const btn = document.querySelector("button");
const li = document.querySelectorAll("li");
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

document.addEventListener("scrool", () => {
    for (let i = 0; i < li.length; i++) {
        li[i].style.fontSize = `${size}px`;
    }
    size--;
});