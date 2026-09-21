import { Component, computed, signal } from "@angular/core";

interface Character {
    id: number,
    name : string,
    power :  number
}

@Component({
    templateUrl : './dragonball-page.component.html',
    selector : 'dragon-page'
})
export class DragonballPageComponent {
    name  = signal('TuPersonaje');
    power = signal(0);
    characters = signal<Character[]>([
        {id : 1, name : 'vegueta', power :  8870},
        // {id : 2, name : 'goku', power :  9300},
        // {id : 3, name : 'truns', power :  8778},
    ]);
    id = this.characters()[this.characters().length - 1].id;

    setName(newValue : string) {
        this.name.set(newValue);
    }

    setPower(newPower :  number) : void {
        // Verificar la forma mas optima de hacerlo, porque en el html pueden cambiar el tipo de input
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