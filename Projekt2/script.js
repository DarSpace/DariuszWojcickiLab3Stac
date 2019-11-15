document.addEventListener('DOMContentLoaded', appStart)
let canvass
let myPS


function appStart() {

    myPS = new Photoshop('canvas')
    dokument
        .quertySelector('#squareBrush')
        .addEventListener('touchstart', () => {
            Photoshop.setBrush('square')
        })
    dokument
        .quertySelector('#circleBrush')
        .addEventListener('touchstart', () => {
            Photoshop.setBrush('circle')
        });

} 