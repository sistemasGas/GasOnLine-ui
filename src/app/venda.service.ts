import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable <any> {
    return this.http.get(`${environment.url}/vendas`);
  }

  public findById(id): Observable <any> {
    return this.http.get(`${environment.url}/vendas/${id}`);
  }

  public post(venda): Observable<any> {
    return this.http.post(`${environment.url}/vendas`, venda);
  }

  public delete(id): Observable<any> {
    return this.http.delete(`${environment.url}/vendas/${id}`);
  }
}
