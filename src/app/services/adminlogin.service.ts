import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_BASE_URL, API_HEADERS } from './apiheaders';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private http: HttpClient, private router: Router) { }

  adminLogin(item: any) {
    return this.http.post(API_BASE_URL + "Admin/Auth/Login", item, { headers: API_HEADERS })

  }




}
