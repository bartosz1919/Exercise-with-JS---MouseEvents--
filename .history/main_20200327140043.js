const btn = document.querySelector("button");
const li = document.querySelectorAll("li");
const ul = document.querySelector("ul");
ul.style.position = "fixed";
btn.style.position = "fixed";
let size = 10;
document.body.style.height = "10000px";

// btn.addEventListener("click", () => {
//     for (let i = 0; i < li.length; i++) {
//         li[i].style.display = "block";
//         li[i].style.fontSize = `${size}px`;
//     }
//     size += 10;
// });

btn.addEventListener("click", () => {
    li.forEach(li => {
        li.style.display = "block";
        li.style.fontSize = `${size}px`;
    });
    size++;
});

document.addEventListener("scroll", () => {
    if (size >= 0) {
        for (let i = 0; i < li.length; i++) {
            li[i].style.fontSize = `${size}px`;
        }

        size--;
    }
});