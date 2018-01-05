import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService,
                private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                    const isLoggedIn = this.authService.isLoggedIn();
                    if(isLoggedIn) {
                        console.log(isLoggedIn);
                        return isLoggedIn;
                    } else {
                        this.router.navigate(['/not-found']);
                        console.log("It's redirecting the view");
                        return false;
                    }
                    //return isLoggedIn;
                }
}