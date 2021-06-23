import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs-compat/operator/map';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }


  // public getUsuarios(): Observable<any> {
  //   return this.http.get(`${environment.url}/pessoa`);
  // }

  public getUsuarios(): Promise<any> {
    return this.http.get(`${environment.url}/pessoa`)
    .toPromise()
    .catch(erro => {return Promise.reject(erro)});
  }


  public deleteUsuarios(id): Promise<any> {
    return this.http.delete(`${environment.url}/pessoa/${id}`)
    .toPromise()
    .catch(erro => {return Promise.reject(erro)});
  }

  readById(id: string): Promise<any> {
    return this.http.get(`${environment.url}/pessoa/${id}`)
    .toPromise()
    .catch(erro => {return Promise.reject(erro)});
  }

  public salvarUsuario(pessoa): Promise<any> {
    return this.http.post(`${environment.url}/pessoa`, pessoa)
    .toPromise()
    .catch(erro => {return Promise.reject(erro)});
  }

  public buscarQuantidadeClientes(): Promise<any> {
    return this.http.get(`${environment.url}/pessoa/qntClientes`)
    .toPromise()
    .catch(erro => {return Promise.reject(erro)});
  }
}
