import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppConfig } from './config/app.config';

import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes=[
    { path: '', redirectTo:'/'+AppConfig.routes.home, pathMatch: 'full'},
    { path: AppConfig.routes.home, component: HomeComponent },
    { path: AppConfig.routes.signup, component: SignupComponent},
    { path: AppConfig.routes.login, loadChildren: './login/login.Module#LoginModule'}, // component: LoginComponent },
    { path: AppConfig.routes.notfound, component: PageNotFoundComponent },
    { path: AppConfig.routes.courses, component: CoursesComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: '/' + AppConfig.routes.notfound}
]


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}