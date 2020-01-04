/* const notesArr = []

// klasa notatki
class Note {

    constructor(title = '', description = '') {
        this.title = title
        this.description = description
        this.color = 'red'
        this.created = Date().toISOString()
        this.pinned = false



    }





}

//zapisanie do localStorage
localStorage.setItem('notes', JSON.stringify(notesArr))

//odczyt z localStrage




//sprawdzic czy istnieje dana notatka
if (typeof localStorage !== 'undefined')   //sprawdzenie czy jest zdefiniowana 
{

    if (localStorage.getItem('notes') != null) {
        notesArr = JSON.parse(localStorage.getItem('notes'))
    }
}
//-----------------------------------------------------------------------------------



notesArr = JSON.parse(localStorage.getItem('notes'))

*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ======= NOTATKA 

(function () {

    var draggedEl,    //element który bedziemy przeciągać 
        onDragStart,
        onDrag,
        onDragEnd,
        grabPointX, //absolutne położenie na pasku danej notatki
        grabPointY,
        createNoteBox;


    onDragStart = function (e)   //funkcja która przyjmuje obiekt zdarzenia 
    {
        var boundingClientRect;
        if (e.target.className.indexOf('NoteBar') === -1) // element za który bedziemy chwytac, jezeli to zdarzenie nie bedzie posiadało klasy "NoteBar" to niebedziemy chcieli wywoływać tej funkcji czyli jak niebedziemy przeciągac to niebedzie funkcja wywoływana  
        {
            return;
        }

        draggedEl = this;

        boundingClientRect = draggedEl.getBoundingClientRect(); // pozycja faktycznia w przegladarce danego elemendtu 




        grabPointY = boundingClientRect.top - e.clientY;
        grabPointX = boundingClientRect.left - e.clientX;
    };



    onDrag = function (e) {             // przyjmuje jako parametr obiekt zdarzenia ze jak nieprzeciągamy to niewywołujemy tej funkcji       
        if (!draggedEl) {
            return;
        }

        var posisionX = e.clientX + grabPointX,   // pozycja koncowa okienka 
            posisionY = e.clientY + grabPointY;


        if (posisionX < 0) {
            posisionX = 0;
        }

        if (posisionY < 0) {
            posisionY = 0;
        }

        draggedEl.style.transform = "translateX(" + posisionX + "px) translateY(" + posisionY + "px)";


    };
    onDragEnd = function () // (...)
    {
        draggedEl = null;
        grabPointX = null;
        grabPointY = null;
    };

    createNoteBox = function () {     // dodawanie nowej notatki 
        var BoxElement = document.createElement('div'),
            BarElement = document.createElement('div'),
            textareaElement = document.createElement('textarea');

        BoxElement.classList.add('NoteBox'),
            BarElement.classList.add('NoteBar');

        BoxElement.appendChild(BarElement);
        BoxElement.appendChild(textareaElement);

        BoxElement.addEventListener('mousedown', onDragStart, false);

        document.body.appendChild(BoxElement);
    };


    addNoteBoxElement = document.querySelector('.addNoteBox');
    addNoteBoxElement.addEventListener('click', createNoteBox, false);
    document.addEventListener('mousemove', onDrag, false);  // ( ... ) 
    document.addEventListener('mouseup', onDragEnd, false); // kiedy puscimy myszke chcemy wywołac onDragEnd


});
// ========