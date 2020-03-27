const btn = document.querySelector("button");
const li = document.querySelectorAll("li");

btn.addEventListener("click", () => {
    for (let i = 0; i < i.length; i++) {
        li[i].style.display = "block";

        console.log(`dupa`);
    }
});