import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService,
                private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                    const isLoggedIn = this.authService.isLoggedIn();
                    if(isLoggedIn) {
                        return isLoggedIn;
                    } else {
                        this.router.navigate(['/']);
                    }
                    //return isLoggedIn;
                }
}