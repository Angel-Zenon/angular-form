import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';
@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
})
export class CharacterList {
  // * para comunicar informacion de un componente padre a un hijo, se utiliza input, required->hace que la informacion que solicita a el padre, sea obligatoria
  characters = input.required<Character[]>(); // marcamos que vamos a recibil un arreglo  de personajes
  listName = input.required<string>()
  
}
