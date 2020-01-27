class Notes {    // trzymam pola do notatki 
    id;
    pinnedId;
    title;
    text;
    color;
    createDate;
    isPinned;

    constructor(id, title, text, color) {
        this.pinnedId = id;
        this.id = id;
        this.title = title;
        this.text = text;
        this.color = color;
        this.isPinned = false;
        this.createDate = new Date();



    }
}



class Engine {         //klasa notatek 
    notesArr = [];    //deklaracja ID w tablicy 




    constructor() {

        // przycisk który dodaje nam nową notatke 
        document.querySelector('#addNote').addEventListener('click', () => this.createNewNote(document.querySelector('#noteTitle').value, document.querySelector('#noteText').value, document.querySelector('#color').value));  // przycisk do dodawania notatki



        if (typeof localStorage !== 'undefined') {                          // czy istnieje local storage
            if (localStorage.getItem('notes') != null) {                    // czy istnieje jakas notatka czyli jak nie jest pusty to pobiera notatke i wyswietlam notatke )
                this.notesArr = JSON.parse(localStorage.getItem('notes'));
                this.show();
            }
        }


    }


    createNewNote(title, text, color) {
        if (this.notesArr.length < 1) {                       //  jezeli nie mam notatki i robie pierwsza to przypisuje mu na sztywno ID 0  
            this.notesArr.push(new Notes(0, title, text, color));
        } else {
            let maxId = 0;
            this.notesArr.forEach((note, index) => {      // szukamy  najwyzszego numeru ID w tablicy 'po koei mi sprawdza' 
                if (maxId < note.id) {
                    maxId = note.id;
                }
            });
            this.notesArr.push(new Notes(maxId + 1, title, text, color));
        }
        this.saveNotes();
        this.show();
    }

    deleteNote(id) {
        if (this.notesArr.length < 1) {     // zabezpieczenie jesli nie ma notatki a chcemy usunac 
            return;
        } else {
            this.notesArr.forEach((note, i) => {  // szukamy notatki o ID które chcemy usunąć  
                if (note.id === id) {
                    this.notesArr.splice(i, 1);    // usunięcie z tablicy notatnke 1 notatke  i zastepuje je istniejącymi
                }
            });
        }
        this.saveNotes();
        this.show();
    }

    pinnedNote(id) {                       // przypinanie 
        if (this.notesArr.length < 1) {          // zabezpieczenie 
            return;
        } else {
            let minpinnedId = 0;
            this.notesArr.forEach((note) => {            //wykonuje sie tyle razy ile jest notatek
                if (minpinnedId > note.pinnedId) {      // szuka najmniejszego pinnedId czyli PinnedID  we wszystkich notatkach najmniejszej notatki przypiętej najwyżej notatki
                    minpinnedId = note.pinnedId;
                }
            });
            this.notesArr.forEach((note) => {
                if (note.id === id) {              // przypisanie najmniejszego ID - 1 do notatki, którą przypiąłem 
                    note.isPinned = true;
                    note.pinnedId = minpinnedId - 1;
                }
            });
        }
        this.show();
        this.saveNotes();
    }


    unPinnedNote(id) {
        if (this.notesArr.length < 1) {
            return;
        } else {
            this.notesArr.forEach((note, index) => {          // przypisanie pinedID do ID w celu go do pierwotnego miejsca wyświetlonego
                if (note.id === id) {
                    note.isPinned = false;
                    note.pinnedId = id;
                }
            });
        }
        this.show();
        this.saveNotes();
    }

    show() {
        const tempNotesArr = this.notesArr.sort((a, b) => {       // sortowanie 
            return a.pinnedId - b.pinnedId;
        });
        document.querySelector('#tasks').innerHTML = " ";
        tempNotesArr.forEach((note, index) => {
            const id = note.id;
            let tempHTML = '';
            tempHTML += '<div class="col-12 col-md-4 col-lg-3 col-xl-2 mt-3">';   // tu pojawiam
            tempHTML += '<div class="card">';
            tempHTML += '<div class="card-body m-l-auto m-r-auto"><div class="row py-1 mb-4 mt-0" style="background-color:' + note.color + '; "></div><h5 class="card-title mt-3">' + note.title + '</h5>';
            tempHTML += '<p class="card-text">' + note.text + '</p>';
            tempHTML += '<div class="row"><button onclick="engine.deleteNote(' + id + ')" class="btn btn-danger col-3 col-md-5">Usuń</button><br><div class="flex-fill"></div>'; // przycisk do usuwania notatki
            if (note.isPinned) {
                tempHTML += '<button onclick="engine.unPinnedNote(' + id + ')" class="btn btn-warning col-3 col-md-5">Odepnij</button><br>'; // przycisk odpinanie
            } else {
                tempHTML += '<button onclick="engine.pinnedNote(' + id + ')" class="btn btn-success col-3 col-md-5">Przypnij</button><br>'; // przycisk przypinanie
            }
            tempHTML += '</div><p class="card-text mt-1">' + note.createDate + '</p></div></div></div>';
            document.querySelector('#tasks').innerHTML += tempHTML;
        });

    }

    saveNotes() {
        localStorage.setItem('notes', JSON.stringify(this.notesArr));
    }
}
const engine = new Engine();