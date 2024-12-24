import { Injectable, inject } from '@angular/core';
import { ENDPOINT } from './endpoint/endpoint';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HandleErrorService } from './handle-error.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private ENDPOINT = ENDPOINT;
  private http:HttpClient = inject(HttpClient);
  private handleError = inject(HandleErrorService);

  constructor() { }

  getTenant(){
    return JSON.parse(localStorage.getItem('user'))?.username
  }

  register(payload: any): Observable<any> {
    return this.http.post<any>(this.ENDPOINT.MAIN_HOST + this.ENDPOINT.AUTH.CREATE_TENANT, payload)
    .pipe(
      map((response:any) => {
        if (response.status) {
          return response.data;
        }
      })
    );
  }

  loginWithTenant(payload:any){
      // Define headers
  const headers = new HttpHeaders({
    'Accept-Language': 'ar',
    // 'Content-Type': 'application/json'
  });
    return this.http.post<any>(this.ENDPOINT.MAIN_HOST + this.ENDPOINT.AUTH.LOGIN_WITH_TENANT,
      payload,
      {headers}
    ).pipe(
      map((response:any) => {
        if (response.status) {
          return response.data;
        }
      })
    );
  }

  loginWithoutTenant(payload:any){
    return this.http.post<any>(this.ENDPOINT.MAIN_HOST + this.ENDPOINT.AUTH.LOGIN_WITHOUT_TENANT,
      payload
    ).pipe(
      map((response:any) => {
        if (response.status) {
          return response.data;
        }
      })
    );
  }


}
