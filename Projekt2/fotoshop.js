document.addEventListener('DOMContentLoaded', appStart)
let canvass
let myPS


function appStart() {
    canvas = document.querySelector('#canvas')
    document
        .querySelector('#btnDarken')
        .addEventListener('click', () => darkenFilter())
    document
        .querySelector('#btnContrast')
        .addEventListener('click', () => contrastFilter())
    document
        .querySelector('#btnLight')
        .addEventListener('click', () => lightFilter())



    ctx = canvas.getContext('2d')

    const srcImage = new Image()
    srcImage.src = 'wis.jpg'                                     // Ładowanie grafiki 
    srcImage.addEventListener('load', () => {
        drawImage(srcImage, 20, 20)

    })
}





function darkenFilter(amount = 30) {                             //przyciemnianie 
    const canvasData = ctx.getImageData(0, 0, 800, 600)
    for (let i = 0; i < canvasData.data.length; i += 4) {
        // R
        canvasData.data[i] -= amount
        // G
        canvasData.data[i + 1] -= amount
        // B
        canvasData.data[i + 2] -= amount
    }
    ctx.putImageData(canvasData, 0, 0)
    console.log(canvasData.data)
}

function lightFilter(amount = 30) {
    const canvasData = ctx.getImageData(0, 0, 800, 600)                            //rozjasnianie 
    for (let i = 0; i < canvasData.data.length; i += 4) {
        // R
        canvasData.data[i] += amount
        // G
        canvasData.data[i + 1] += amount
        // B
        canvasData.data[i + 2] += amount
    }
    ctx.putImageData(canvasData, 0, 0)
    console.log(canvasData.data)
}


function contrastFilter(amount = 7) {                          //kontrast ale nie działa
    const canvasData = ctx.getImageData(0, 0, 800, 600)
    for (let i = 0; i < canvasData.data.length; i += 0) {
        const r = canvasData.data[i]
        const g = canvasData.data[i + 1]
        const b = canvasData.data[i + 2]

        const avg = (r + g + b) / 3
        if (avg <= 127) {
            amount = -amount
        }
        canvasData.data[i] += amount
        canvasData.data[i + 1] += amount
        canvasData.data[i + 2] += amount
    }
    ctx.putImageData(canvasData, 0, 0)
    console.log(canvasData.data)
}



function drawImage(img, x, y) {                              // rysowanie na canvasie obrazka 
    ctx.drawImage(img, x, y)
}
// function drawRect(x, y, width, height) {
//     ctx.rect(x, y, width, height)
//     ctx.fill()
// }

// function drawCircle(x, y, radius) {
//     ctx.arc(x, y, radius, 0, 2 * Math.PI)
//     ctx.fill()
//     // ctx.stroke()
// }
