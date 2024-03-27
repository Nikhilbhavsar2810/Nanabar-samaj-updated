import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl!: string;

  constructor(
    public httpClient: HttpClient
  ) {
    this.baseUrl = 'http://nanabarsamaj-001-site1.htempurl.com/';
  }


  public getBaseUrl(uri: string): any {
    return this.baseUrl + uri;
  }


  public get(uri: string, load = true, options = {}): any {
    return this.httpClient.get(this.getBaseUrl(uri), options).pipe(
      tap(() => {

      }),
    );
  }


  public put(uri: string, data: any, options = {}, load = true): any {
    return this.httpClient
      .put(this.getBaseUrl(uri), data, options)
      .pipe(tap(() => {
      }));
  }

  public post(uri: string, data: any, options = {}, load = true): Observable<any> {
    return this.httpClient
      .post(this.getBaseUrl(uri), data, options)
      .pipe(tap(() => {
      }));
  }


  public delete(uri: string, options = {}, load = true): Observable<any> {
    return this.httpClient
      .delete(this.getBaseUrl(uri), options)
      .pipe(tap(() => {
      }));
  }

}
