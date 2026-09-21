import { Component, input } from '@angular/core';
import { Note } from '../../../interfaces/note.interface';
@Component({
  selector: 'note-card',
  imports: [],
  templateUrl: './note-card.html',
  styleUrl : './note-card.css'
})
export class NoteCard {
  notes = input.required<Note[]>();


  
}
