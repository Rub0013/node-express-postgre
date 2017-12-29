import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _api: ApiService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this._api.signedIn) {
        return true;
      }
      this.router.navigate(['login']);
      return false;
  }
}
