import { UpperCasePipe } from "@angular/common";
import { Component, signal, WritableSignal, computed } from "@angular/core";


@Component({
    templateUrl :  './hero-page.component.html',
    selector : 'hero-page',
    imports : [UpperCasePipe]
})
export class HeroPageComponent {
    name  = signal("IRONMAN");
    age : WritableSignal<number> = signal(10);
    heroDescription  = computed(() => { // Señal que regresa valores de otras señales
        return `${this.name()} - ${this.age()}`
    });

    capitalizedName = computed(() =>  this.name().toUpperCase());

    setName() : void {
        this.name.set("Spiderman")
    }
    setAge() : void {
        this.age.set(30);
    }

    reset() :void {
        this.name.set("IronMan");
        this.age.set(10);
    }
} 