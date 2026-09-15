
import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl : `./counter-page.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
    protected counter : number = 0;
    protected counterSignal = signal(0);

    constructor() {
        // setInterval(() => {
        //     // this.counter += 1;
        //     this.counterSignal.update(current => current + 1)
        //     console.log("tick", this.counter)
        // }, 2000)
    }

    increaseBy(value : number) {
        
        this.counter += value;
        this.counterSignal.update(current => current + value); // cuando dependemos del valor anterior se debe usar el update(), que recibe una callback y regresa un numero
        // current esta tomando el valor de el contador actual
        
    }

    resset( ) {
        this.counter =  0;
        this.counterSignal.set(0);
    }
}