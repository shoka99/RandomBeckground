
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

let body = document.querySelector('body')

function color() {
    let r = random(0, 255)
    let g = random(0, 255)
    let b = random(0, 255)
    return "rgb(" + r + "," + g + "," + b + ")"
}

setInterval(() => {
    body.style.transition = '1s'
    body.style.background = color()
    console.log(color());
}, 1000);