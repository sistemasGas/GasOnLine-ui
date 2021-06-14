import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public getLogin(): Observable<any> {
    return this.http.get(`${environment.url}/usuarios`);
  }

  public deleteLogin(id): Observable<any> {
    return this.http.delete(`${environment.url}/usuarios/${id}`);
  }

  readById(id: string): Observable<any> {
    return this.http.get(`${environment.url}/usuarios/${id}`);
  }

  public salvarLogin(login): Observable<any> {
    return this.http.post(`${environment.url}/usuarios`, login);
  }

}
