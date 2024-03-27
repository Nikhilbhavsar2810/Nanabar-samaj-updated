import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_HEADERS, API_BASE_URL } from './apiheaders';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(public http: HttpClient) { }

  Country() {
    return this.http.get(API_BASE_URL + "Lookup/GetCountries", { headers: API_HEADERS })
  }

  State(country_Id: any) {
    const endpoint = `${API_BASE_URL}Lookup/GetState?country_id=${country_Id}`;
    return this.http.get(endpoint, { headers: API_HEADERS })
  }


  Cities(State_Id:any){
    const endpoint = `${API_BASE_URL}Lookup/GetCities?state_id=${State_Id}`;
    return this.http.get(endpoint, { headers: API_HEADERS })
  }


}
