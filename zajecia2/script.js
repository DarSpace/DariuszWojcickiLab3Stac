document.querySelector('#circleBtn')
    .addEventListener('click', wstawKolo)

const canvas = document.querySelector('#canvas')
const canvasTop = 100;
const canvasLeft = 0;

canvas.addEventListener('touchmove', onCanvasTouthMove)
canvas.style.top = canvasTop + "px";
canvas.style.left = canvasLeft + "px";


function onCanvasTouthMove(e) {
    Console.log(e)
}

function wstawKolo() {

    const newDiv = document.createElement('div')
    newDiv.classList.add('czerwone-kolo')
    canvas.appendChild(newDiv)
}

const draw = function (e) {
    const x = e.tuches[0].ClientX;
    const y = e.ClientY;
    const div = document.createElement('div');

    document.body.appendChild('div');
    document.body.addEventListener("toutchmove", wstawKolo);
}

const drawActive = function (e) {
    active = !active
}

