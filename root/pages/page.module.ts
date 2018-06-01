import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../sharedComponents/shared-components.module'

import { HomePage } from './home/home.component';
import { AboutPage } from './about/about.component';
import { ServicesPage } from './services/services.component';
import { ContactPage } from './contact/contact.component';
    const route: Routes = [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomePage, pathMatch: 'full' },
            { path: 'about', component: AboutPage, pathMatch: 'full' },
            { path: 'services', component: ServicesPage, pathMatch: 'full' },
            { path: 'contact-us', component: ContactPage, pathMatch: 'full' }            
        ]
@NgModule({
    declarations: [ 
        HomePage,
        AboutPage,
        ServicesPage,
        ContactPage,
        MainComponent
     ],
    imports: [ BrowserModule, RouterModule.forRoot( route ), SharedModule ],
    providers: [],
    bootstrap: [ MainComponent ]
})

export class PagesModule{
}