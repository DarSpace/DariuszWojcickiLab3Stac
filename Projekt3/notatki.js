class Notes {
    id;
    pickupId;
    title;
    text;
    color;
    createDate;
    isPickedUp;

    constructor(id, title, text, color) {
        this.pickupId = id;
        this.id = id;
        this.title = title;
        this.text = text;
        this.color = color;
        this.isPickedUp = false;
        this.createDate = new Date();



    }
}



class Engine {
    notesArr = [];




    constructor() {


        //===========================================================


        document.querySelector('#addNote').addEventListener('click', () => this.createNewNote(document.querySelector('#noteTitle').value, document.querySelector('#noteText').value, document.querySelector('#color').value));  // przycisk do dodawania notatki

        //===========================================================



        if (typeof localStorage !== 'undefined') {

            if (localStorage.getItem('notes') != null) {
                this.notesArr = JSON.parse(localStorage.getItem('notes'));
                this.show();
            }
        }


    }


    createNewNote(title, text, color) {
        if (this.notesArr.length < 1) {
            this.notesArr.push(new Notes(0, title, text, color));
        } else {
            let maxId = 0;
            this.notesArr.forEach((note, index) => {
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
        if (this.notesArr.length < 1) {
            console.log('Note doesnt exist!');
        } else {
            this.notesArr.forEach((note, i) => {
                if (note.id === id) {
                    this.notesArr.splice(i, 1);
                }
            });
        }
        this.saveNotes();
        this.show();
    }

    pickUpNote(id) {
        if (this.notesArr.length < 1) {
            return;
        } else {
            let minPickupId = 0;
            this.notesArr.forEach((note) => {
                if (minPickupId > note.pickupId) {
                    minPickupId = note.pickupId;
                }
            });
            this.notesArr.forEach((note) => {
                if (note.id === id) {
                    console.log(note);
                    note.isPickedUp = true;
                    note.pickupId = minPickupId - 1;
                }
            });
        }
        this.show();
        this.saveNotes();
    }


    unPickUpNote(id) {
        if (this.notesArr.length < 1) {
            return;
        } else {
            this.notesArr.forEach((note, index) => {
                if (note.id === id) {
                    note.isPickedUp = false;
                    note.pickupId = id;
                }
            });
        }
        this.show();
        this.saveNotes();
    }

    show() {
        const tempNotesArr = this.notesArr.sort((a, b) => {
            return a.pickupId - b.pickupId;
        });
        document.querySelector('#tasks').innerHTML = " ";


        tempNotesArr.forEach((note, index) => {
            const id = note.id;
            let tempHTML = '';
            tempHTML += '<div class = "NoteBox" style = " background-color:' + note.color + '; ">';   // tu pojawiam 
            tempHTML += '<b>' + note.title + '</b>' + '<br>';
            tempHTML += note.text + '<br>';
            tempHTML += '<button onclick="engine.deleteNote(' + id + ')">Usuń</button><br>';
            if (note.isPickedUp) {
                tempHTML += '<button onclick="engine.unPickUpNote(' + id + ')">Odepnij</button><br>';
            } else {
                tempHTML += '<button onclick="engine.pickUpNote(' + id + ')">Przypnij</button><br>';
            }
            tempHTML += '<br>' + note.createDate + '<br><br>';
            document.querySelector('#tasks').innerHTML += tempHTML;
        });

    }

    saveNotes() {
        localStorage.setItem('notes', JSON.stringify(this.notesArr));
    }
}
const engine = new Engine();