import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppConfig } from './config/app.config';

import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes=[
    { path: '', redirectTo:'/'+AppConfig.routes.home, pathMatch: 'full'},
    { path: AppConfig.routes.home, component: HomeComponent },
    { path: AppConfig.routes.signup, component: SignupComponent},
    { path: AppConfig.routes.login, component: LoginComponent }
]


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}