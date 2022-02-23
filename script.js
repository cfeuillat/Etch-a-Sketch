const content = document.querySelector(".content");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

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
    draw();
}


function draw() {
    const square = document.querySelectorAll(".square");
    square.forEach((el) => {
        el.addEventListener('mouseover', function() {
            el.style.backgroundColor = getRandomColor();
        })
    })

}


let clear = document.querySelector(".clear");

clear.addEventListener('click', function() {
    size = Number(prompt("Chose grid size (please enter a number between 2 and 64)"));
    make_grid(size);
})


make_grid(4);