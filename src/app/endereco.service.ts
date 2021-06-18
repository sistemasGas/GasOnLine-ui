import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  url = 'http://viacep.com.br/ws/';

  constructor(private http: HttpClient) { }

  public getEndereco(cep): Observable <any> {
    return this.http.get(this.url+cep+'/json/');
  }

  public post(endereco): Observable<any> {
    return this.http.post(`${environment.url}/vendas`, endereco);
  }
}
