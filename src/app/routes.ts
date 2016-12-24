import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }  from './about/about.component';
import { ContactComponent }  from './contact/contact.component';
//import { AppAbout }  from './pages/about/app.about';

const appRoutes: Routes = [
    // { path: '/**',component: AppComponent},
    //{ path: '/*',component: AppComponent},
    { path: '', component: AboutComponent},
    { path: 'contact', component: ContactComponent},




];


export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ useHash: true });