import { Component, signal } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { Character } from "../../interfaces/character.interface";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";



@Component({
    templateUrl : './dragonball-super-page.component.html',
    selector : 'dragonball-super',
    imports : [CharacterList, CharacterAdd]
})
export class DragonballSuperPageComponent {
    
    characters = signal<Character[]>([
        {id : 1, name : 'vegueta', power :  8870},
        {id : 2, name : 'goku', power :  9300}
    ]);

    addCharacter(newCharacter : Character) : void{        
        this.characters.update(
            (list) => [...list, newCharacter]
        )
    }

}