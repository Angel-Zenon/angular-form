import { Component, input, signal, output } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);
  newCharacter = output<Character>(); // emitiremos un personaje, desde este output, es lo contrario a input

  
  
  setName(newName: string) {
    this.name.set(newName);
  }
  
  
  addCharacter() {
    if (this.name() === '' || this.power() === 0) return;
    const caracter : Character = {
      id : Math.floor(Math.random() * 1000), // id random
      name : this.name(),
      power : this.power()
    }
    // emitimos el nuevo 
    this.newCharacter.emit(caracter);
    this.resetFields();
  }

  setPower(newPower: number) {
    this.power.set(newPower);
  }

  resetFields(): void {
    this.name.set('');
    this.power.set(0);
  }
}
