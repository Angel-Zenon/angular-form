/**
 * Formulario para iniciar session
 * 
 */

import { Component, signal } from "@angular/core"
import { form, FormField } from "@angular/forms/signals"


// * Podemos leer el estado del formulario y sus campos, llamandolo como funcion
// Establecemos una interfaz donde tendremos los campos del formulario
interface LoginData {
    email : string,
    password : string
}
// loginForm(); // -> nos devolveria el estado para todo el formulario
// loginForm.email(); // -> nos devolveria el estado para todo el formulario

// para obtener el valor actual de un campo: 
// const currentEmail = loginForm.email().value();
// // actualizar valores del campo
// loginForm.email().value.set('mrmorale@gmail.com');

@Component ({
    selector : 'login-form',
    templateUrl :  './login-form.component.html',
    imports : [FormField]
})
export class LoginFormComponent {
    
     loginModel = signal<LoginData> ({ // creamos una señal a esa interfaz
        email : '',
        password : '',
    })
    
    loginForm = form(this.loginModel); // convertimos el modelo de nuestro formulario a un FieldTree, donde sus campos tambien seran un FieldTree

    // Evento on sumbmit, el cual se ejecutara cuando se envie el formulario
    onSubmit(evento : Event) {
        evento.preventDefault();
        const credentials = this.loginModel();
        console.log("Logging with: ", credentials);
    }
    
};