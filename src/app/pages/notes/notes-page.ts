import { Component, signal } from "@angular/core";
import { NoteAdd } from "../../components/card/note-add/note-add";
import { Note } from "../../interfaces/note.interface";
import { NoteCard } from "../../components/card/note-card/note-card";
@Component({
    templateUrl : './notes-page.html',
    selector : 'note-page',
    imports : [NoteAdd, NoteCard]
}) export class NotePage {
    notes = signal<Note[]>([]);
    
    addNote(newNote : Note) {
        this.notes.update( 
            (currentList) => [...currentList, newNote]
        )
    };


}