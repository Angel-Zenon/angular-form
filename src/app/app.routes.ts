import { Routes } from '@angular/router';
import { LoginFormComponent } from './pages/form/login/login-form.component';
import { FormRegisterComponent } from './pages/form/register/form-register.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { ShoppingCartComponent } from './pages/sales/shopping-cart.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';
import { NotePage } from './pages/notes/notes-page';

export const routes: Routes = [
    // AQUI DEFINIMOS LAS RUTAS con su respectivo componente que se tiene que renderizar:
    // /login => LoginComponent
    {
        path :  '',
        component : NotePage
    },
    {
        path : 'login',
        component : LoginFormComponent
    },

    {
        path :  'register',
        component : FormRegisterComponent
    },

    {
        path : 'hero',
        component :  HeroPageComponent
    },

    {
        path : 'cart',
        component : ShoppingCartComponent
    },

    {
        path : 'dragonball',
        component: DragonballPageComponent
    },

    {
        path : 'dragonball-super',
        component: DragonballSuperPageComponent
    },

    {
        path : '**',
        redirectTo : ''
    }


    // /404 => PageNotFoundComponent
];
