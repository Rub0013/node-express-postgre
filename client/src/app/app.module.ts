import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {routes} from './app.router';
import {AuthGuard} from './auth.guard';
import {AuthenticatedGuard} from './authenticated.guard';
import {AppComponent} from './app.component';
import {ApiService} from './api.service';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {GalleryComponent} from './gallery/gallery.component';


@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        GalleryComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routes
    ],
    providers: [ApiService, AuthGuard, AuthenticatedGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
