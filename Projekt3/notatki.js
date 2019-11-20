const notesArr = []

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

notesArr = JSON.parse(localStorage.getItem('notes'))