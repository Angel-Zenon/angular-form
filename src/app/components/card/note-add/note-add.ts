import { Component, output, signal } from '@angular/core';
import{ Note , ItemPriority, PRIORITIES} from '../../../interfaces/note.interface';
import { form, required, FormField } from '@angular/forms/signals';
import { NoteCard } from '../note-card/note-card';

@Component({
  selector: 'note-add',
  imports: [FormField],
  templateUrl: './note-add.html',
  styleUrl : './note-add.css'
})
export class NoteAdd {
  
  // IMPLEMENTAR SERVICIOS

  newNote = output<Note>(); // lo que va a regresar
  readonly priorities = PRIORITIES;
  itemPriority = signal<ItemPriority>('Media'); 
  
  registerNoteModel = signal<Note> ({
    id: 0,
    description : '',
    createdAt : new Date(),
    priority :  'Media'
  })

  
  registerForm = form(this.registerNoteModel, (schemaPath) => {
    
    required(schemaPath.description, {message : 'La descripcion es obligatoria'})
    required(schemaPath.priority, {message : 'La prioridad es necesaria'})
    
  })

  onSubmit(e: Event) {
    e.preventDefault();
    // cargar los datos o pasarlos 
    const currentNote: Note = {
      id : Math.floor(Math.random() * 1000),
      description : this.registerNoteModel().description,
      priority : this.registerNoteModel().priority,
      createdAt : new Date()
    }
    this.newNote.emit(currentNote); // EMITE LA ACTUAL NOTA

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
