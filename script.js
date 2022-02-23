const content = document.querySelector(".content");

let j = 0;

while (j < 256) {
    const div = document.createElement("div");
    div.setAttribute('class', 'line');
    content.appendChild(div);
    j += 16;
}

const line = document.querySelectorAll(".line")

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement("div");
        div.setAttribute('class', 'square');
        line[i].appendChild(div);
    }
}


const square = document.querySelectorAll(".square");
square.forEach((el) => {
    el.addEventListener('mouseover', function() {
        el.style.backgroundColor = "black";
    })
})