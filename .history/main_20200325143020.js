const btn = document.querySelector("button");
const li = document.querySelectorAll("li");

btn.addEventListener("click", () => {
    console.log(`dupa2`);
    for (let i = 0; i < li.length; i++) {
        li[i].style.display = "block";

        console.log(`dupa`);
    }
});