import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private apiservice: ApiService
  ) { }

  isAuthenticated = false;



  checkAuthentication(): boolean {
    return this.isAuthenticated;
  }


  get childauth() {
    return true;
  }
  public login(payload: any): Observable<any> {
    // debugger;
    return this.apiservice.post('api/Admin/Auth/Login', payload);
  }

  public loggedInsatus = JSON.parse(sessionStorage.getItem('loggedIn') || ('false'));


  public setLoginStatus(value: any) {
    this.loggedInsatus = value;
    sessionStorage.setItem('loggedIn', 'true');
  }


  get LoginStatus() {
      return JSON.parse(sessionStorage.getItem('loggedIn') || this.loggedInsatus.toString());
  }

  logout() {
    sessionStorage.removeItem('loggedIn')
    sessionStorage.removeItem('Token')
    this.router.navigate(['/login'])
  }


}
