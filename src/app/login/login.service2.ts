import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'


@Injectable()
export class LoginService2{

    constructor(private http: HttpClient){}

    post(user, password): Observable<any> {
        return this.http.post(`http://localhost:8080/login`, {'user': user, 'password': password});
    }

}
