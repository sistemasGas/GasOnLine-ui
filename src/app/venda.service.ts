import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(private http: HttpClient) { }

  public findAll(): Promise <any> {
    return this.http.get(`${environment.url}/vendas`)
    .toPromise()
    .catch(erro => {return Promise.reject(erro)});
  }

  public findById(id): Promise<any> {
    return this.http.get(`${environment.url}/vendas/${id}`)
    .toPromise()
    .catch(erro => {return Promise.reject(erro)});
  }

  public post(venda): Promise<any> {
    return this.http.post(`${environment.url}/vendas`, venda)
    .toPromise()
    .catch(erro => {return Promise.reject(erro)});
  }

  public delete(id): Promise<any> {
    return this.http.delete(`${environment.url}/vendas/${id}`)
    .toPromise()
    .catch(erro => {return Promise.reject(erro)});
  }

  public buscarTotalVendas(){
    return this.http.get(`${environment.url}/vendas/totalvendas`)
    .toPromise()
    .catch(erro => {return Promise.reject(erro)});
  }
}
