import { Component, signal } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list";

interface Character {
    id: number,
    name : string,
    power :  number
}

@Component({
    templateUrl : './dragonball-super-page.component.html',
    selector : 'dragonball-super',
    imports : [CharacterList]
})
export class DragonballSuperPageComponent {
    name  = signal('');
    power = signal(0);
    characters = signal<Character[]>([
        {id : 1, name : 'vegueta', power :  8870},
        {id : 2, name : 'goku', power :  9300}
    ]);
    id = this.characters()[this.characters().length - 1].id;

    setName(newValue : string) {
        this.name.set(newValue);
    }

    setPower(newPower :  number) : void {
        this.power.set(newPower);
    }

    addCharacter() : void{
        if (!this.power() || !this.name() || this.power() <= 0) return;
        const newCharacter : Character = {
            id : this.characters().length + 1,
            name : this.name(),
            power :  this.power()
        }
        
        this.characters.update(
            (list) => [...list, newCharacter]
        )
        this.resetFields();
    }

    resetFields(): void {
        this.name.set('');
        this.power.set(0);
    }
}