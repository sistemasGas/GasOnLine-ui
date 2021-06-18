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

  public getEndereco(cep): Promise <any> {
    return this.http.get(this.url+cep+'/json/')
    .toPromise()
    .catch(erro => {return Promise.reject('Verifique o CEP digitado')});
  }

  public getAll(): Promise <any> {
    return this.http.get(`${environment.url}/endereco`)
    .toPromise()
    .catch(erro => {return Promise.reject('Falha ao buscar endereços')});
  }

  public post(endereco): Promise<any> {
    return this.http.post(`${environment.url}/endereco`, endereco)
    .toPromise()
    .catch(erro => {return Promise.reject('Falha ao cadastrar endereço!')});
  }

  public deleteEndereco(id): Promise<any> {
    return this.http.delete(`${environment.url}/endereco/${id}`)
    .toPromise()
    .catch(erro => {return Promise.reject('Falha ao deletar o endereço {id}!')});
  }
}
