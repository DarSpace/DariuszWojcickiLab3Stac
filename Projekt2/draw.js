/* class Photoshop {                                  //klasa do rysowania 
    constructor(canvasId) {
        this.brushShape = 'circle'
        this.setCanvas(canvasId)
    }

    setBrush(shape) {                            //pobiera pędzel 
        this.brushShape = shape
    }

    setCanvas(canvasId) {                               // /// ///////////////
        this.canvas = document.querySelector('#' + canvasId)
        this.canvasConfig = {
            top: 100,
            left: 0
        }
        this.canvas.addEventListener('touchmove', (e) => this.onCanvasTouchMove(e))
        this.canvas.style.top = this.canvasConfig.top + 'px';
        this.canvas.style.left = this.canvasConfig.left + 'px';
    }

    onCanvasTouchMove(e) {
        const xPos = e.touches[0].clientX - this.canvasConfig.left
        const yPos = e.touches[0].clientY - this.canvasConfig.top
        this.draw(xPos, yPos)
    }

    draw(x, y) {
        const newDiv = document.createElement('div')
        newDiv.classList.add('brush', this.brushShape)
        newDiv.style.left = x + 'px'
        newDiv.style.top = y + 'px'
        this.canvas.appendChild(newDiv)
    }
}

*/
document.addEventListener('DOMContentLoaded', appStart)  // to dobre rysowanie
let canvass
let myPS



window.addEventListener("load", () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");


    const painting = false;

    function startPosition(e) {
        painting = true;
        draw(e)
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 10;         // grubość pędzla
        ctx.linrCap = "round";
        ctx.strokeStyle = "green"   //kolor pędzla

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.MooveTo(e.client, e.clientY)
    }

    canvas.addEventListner("mousedown", startPosition);
    canvas.addEventListner("mouseup", finishedPosition);
    canvas.addEventListner("mousemove", draw);

});