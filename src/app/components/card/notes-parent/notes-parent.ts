import { Component, signal } from '@angular/core';
import{ Note , ItemPriority, PRIORITIES} from '../../../interfaces/note.interface';
import { form, required, FormField } from '@angular/forms/signals';
import { NoteCard } from '../note-card/note-card';

@Component({
  selector: 'notes-parent',
  imports: [FormField, NoteCard],
  templateUrl: './notes-parent.html',
  styleUrl : './notes-parent.css'
})
export class NotesParent {
  notes = signal<Note[]>([]);
  readonly priorities = PRIORITIES;
  itemPriority = signal<ItemPriority>('Media'); 
  
  registerNoteModel = signal<Note> ({
    id: 0,
    description : '',
    createdAt : new Date(),
    priority :  'Media'
  })

  
  registerForm = form(this.registerNoteModel, (schemaPath) => {
    // validaciones del formulario
    required(schemaPath.description, {message : 'La descripcion es obligatoria'})
    required(schemaPath.priority, {message : 'La prioridad es necesaria'})
    
  })

  onSubmit(e: Event) {
    e.preventDefault();
    // cargar los datos o pasarlos 
    const newNote : Note = {
      id : this.notes().length + 1,
      description : this.registerNoteModel().description,
      priority : this.registerNoteModel().priority,
      createdAt :  new Date()
    }

    this.notes.update(
      (notesList) => [...notesList, newNote]
    )

    this.registerNoteModel.set(
      {
        id:0,
        description : '',
        priority : 'Baja',
        createdAt :  new Date()
      }
    )
  }

  
} 
