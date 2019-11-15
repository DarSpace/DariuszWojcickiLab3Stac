document.addEventListener('DOMContentLoaded', appStart)
let canvass
let myPS

function appStart() {

    myPS = new Photoshop('canvaass')
    dokument
        .quertySelector('#squareBrush')
        .addEventListener('touchstart', () => {
            myPS.setBrush('square')
        })
    dokument
        .quertySelector('#circleBrush')
        .addEventListener('touchstart', () => {
            myPS.setBrush('circle')
        })

} 