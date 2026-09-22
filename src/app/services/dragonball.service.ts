import { effect, Injectable, signal } from "@angular/core";
import { Character } from "../interfaces/character.interface";


@Injectable({
    providedIn : 'root' // singelton -> misma instancia para toda la app
}) export class DragonBallService {
    constructor(){}

    characters = signal<Character[]>([
        {id : 1, name : 'vegueta', power :  8870},
        {id : 2, name : 'goku', power :  9300}
    ]);

    // EFECTO QUE cuando muta nuesta lista de caracteres, guarde en el local storage
    saveToLocalStorage = effect(() => {
        // CUANDO LA SEÑAL CAMBIA, ejecuta la funcion
        localStorage.setItem('characters' , JSON.stringify(this.characters()));
    })

    addCharacter(newCharacter : Character) : void{        
        this.characters.update(
            (list) => [...list, newCharacter]
        )
    }
    
}

// El servicio  va a trabajar como un DEPENDECY INYECTION
// El servicio será un Singelton 
// Vamos a hacer que esta clase que es un servicio, persista, que siempre
// este instanciada, para acceder o tener datos a la mano

// * el efecto, es una funcion, que llama a un callback cuando algo suceda, señal 