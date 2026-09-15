import { Component, signal } from "@angular/core";
import { email, form, FormField, max, min, required } from "@angular/forms/signals";


interface RegisterData {
    name : string, 
    lastname : string,
    email : string,
    age : number,
    // agregar birthDay
}

@Component({
    selector : 'form-register',
    templateUrl : './form-register.component.html',
    styleUrl : './form-register.component.css',
    imports : [FormField]
})
export class FormRegisterComponent {
    
    registerModel = signal<RegisterData> ({
        name: '' ,
        lastname : '',
        email : '',
        age: 0,
    })

    registerForm = form(this.registerModel,  (schemaPath) => {
        required(schemaPath.email, {message : 'El email es obligatorio'});
        required(schemaPath.name, {message : 'Campo obligatorio'});
        required(schemaPath.age, {message : 'Campo obligatorio'});

        // validamos el campo de email: 
        email(schemaPath.email)
        // para asignar una expresion regular usamos pattern
        min(schemaPath.age, 18, {message : 'Solo puede crearse cuenta mayores de edad'});
        max(schemaPath.age, 110, { message:'Edad invalida' })
    });

    onSubmit(e : Event) {
        e.preventDefault();
        const credentials = this.registerModel();
        console.log("Data to register: ", credentials);
        // hacer peticion POST
    }
}