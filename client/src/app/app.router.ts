import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { AuthenticatedGuard } from './authenticated.guard';


export const router: Routes = [
    { path: '', redirectTo: 'gallery', pathMatch: 'full'},
    { path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard]},
    { path: 'register', component: RegisterComponent, canActivate: [AuthenticatedGuard] },
    { path: 'login', component: LoginComponent, canActivate: [AuthenticatedGuard] },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
