import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }


  public getUsuarios(): Observable<any> {
    return this.http.get(`${environment.url}/pessoa`);
  }

  public deleteUsuarios(id): Observable<any> {
    return this.http.delete(`${environment.url}/pessoa/${id}`);
  }

  readById(id: string): Observable<any> {
    return this.http.get(`${environment.url}/pessoa/${id}`);
  }

  public salvarUsuario(usuario): Observable<any> {
    return this.http.post(`${environment.url}/pessoa`, usuario);
  }

  public buscarQuantidadeClientes(): Observable<any> {
    return this.http.get(`${environment.url}/pessoa/qntClientes`);
  }
}
