const content = document.querySelector(".content");



function make_grid(size) {
    content.innerHTML = '';
    for (let j = 0; j < size * size; j += size) {
        let div = document.createElement("div");
        div.setAttribute('class', 'line');
        content.appendChild(div);
    }

    const lines = document.querySelectorAll(".line")

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let div = document.createElement("div");
            div.setAttribute('class', 'square');
            lines[i].appendChild(div);
        }
    }

    const square = document.querySelectorAll(".square");

    square.forEach((el) => {
        el.addEventListener('mouseover', function() {
            el.style.backgroundColor = "black";
        })
    })

}

make_grid(4);


let clear = document.querySelector(".clear");

clear.addEventListener('click', function() {
    size = Number(prompt("Chose grid size (please enter a number between 2 and 64)"));
    make_grid(size);
})