document.addEventListener('DOMCContentLoaded', appStart);

let box, btn, counterBtn;

box = document.querySelector('#box');
btn = document.querySelector('#actionBtn');
counterBtn = document.querySelector('#counterBtn');
btn.addEventListener('click', zmienKolor)
counterBtn.addEventListener('click', odliczanie)
//box.className = "green"
box.classList.add('green');


function zmienKolor(e) {
    //console.log(e)
    box.classList.toggle('green')
}
let odliczanieInterval
function odliczanie() {
    //for(let i = 1; i<=10; i++);{
    //  box.innerHTML += i + '<br>'}

    odliczanieInterval = setInterval(wypiszLiczbe, 500)

    wypiszLiczbe()
}
let licznik = 1

function wypiszLiczbe() {
    box.innerHTML += licznik + "<br>"
    licznik++;
    if (licznik < 10) {
        clearInterval(odliczanieInterval)
        //setTimeout(wypiszLiczbe)
    }



    //if(licznik <= 10) {
    clearTimeout(wypiszLiczbe)


}










