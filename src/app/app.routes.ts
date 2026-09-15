import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { LoginFormComponent } from './pages/form/login/login-form.component';
import { FormRegisterComponent } from './pages/form/register/form-register.component';

export const routes: Routes = [
    // AQUI DEFINIMOS LAS RUTAS con su respectivo componente que se tiene que renderizar:
    // /login => LoginComponent
    {
        path :  '',
        component : CounterPageComponent
    },
    {
        path : 'login',
        component : LoginFormComponent
    },

    {
        path :  'register',
        component : FormRegisterComponent
    }

    // /404 => PageNotFoundComponent
];
