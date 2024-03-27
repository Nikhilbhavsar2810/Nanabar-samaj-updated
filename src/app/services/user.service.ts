import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL, API_HEADERS } from './apiheaders';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getalluser(data: any) {
    console.log(data);
    return this.http.post(API_BASE_URL + "/User/GetAll", { headers: API_HEADERS })

  }


  // postData(data: any): Observable<any> {
  //   const body =
  //   {
  //     pageNumber: 1,
  //     pageSize: 3,
  //     search: "prashant",
  //     countryId: null,
  //     stateId: null,
  //     cityId: null,
  //     is_Karobari_Member: null,
  //     sortBy: "string"
  //   }
  //   return this.http.post<any>(API_BASE_URL + "User/GetAll", body, { headers: API_HEADERS });

  // }


  postData(data: any): Observable<any> {
    debugger
    const body =
    {
      pageNumber: 1,
      pageSize: 3,
      search: "prashant",
      countryId: null,
      stateId: null,
      cityId: null,

      // isactive: null,

      // 
      isactive: null,
      is_admin_approve: null,
      is_verify: null,
      // 

      is_Karobari_Member: null,
      sortBy: "string"
    }
    return this.http.post<any>(API_BASE_URL + "User/GetAll", body, { headers: API_HEADERS });

  }



}
