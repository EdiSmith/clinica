import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { About } from './component/about/about';


export const routes: Routes = [


    {
        path:"", component:Home
    },

     {
        path:"about", component:About
    },


];
 