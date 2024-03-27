import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate ,CanActivateChild{
  constructor(
    public _auth:AuthserviceService,
    private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  boolean | Observable<boolean> | Promise<boolean> {
    // debugger;
    if (!this._auth.LoginStatus) {
      this.router.navigate(['login']);
    }
    return this._auth.LoginStatus;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    return this.canActivate(route, state);
  }
  
}
