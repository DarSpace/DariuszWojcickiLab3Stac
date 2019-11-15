document.addEventListener('DOMContentLoaded', appStart)
let canvass
let myPS


function appStart() {

    myPS = new PhotoShop('#canvas')
    document
        .quertySelector('#squareBrush')
        .addEventListener('touchstart', () => {
            myPS.setBrush('square')
        })
    document
        .quertySelector('#circleBrush')
        .addEventListener('touchstart', () => {
            myPS.setBrush('circle')
        });

} 