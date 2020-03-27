const btn = document.querySelector("button");
const li = document.querySelectorAll("li");



btn.addEventListener("click", () => {



    for (let i = 0; i < li.length; i++) {
        let size = 10;
        li[i].style.display = "block";
        li[i].style.fontSize = '${size++}px';

        console.log(size);


    }



})