import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

    public getProdutos(): Promise <any> {
      return this.http.get(`${environment.url}/produtos`)
      .toPromise()
      .catch(erro => {return Promise.reject('Falha ao listar Produto!')});
    }

    public getProdutosPorId(id): Promise <any> {
      return this.http.get(`${environment.url}/produtos/${id}`)
      .toPromise()
      .catch(erro => {return Promise.reject('Falha ao listar Produto!')});
      
    }

    public buscarValorEstoque():Promise <any> {
      return this.http.get(`${environment.url}/produtos/valorestoque`)
      .toPromise()
      .catch(erro => {return Promise.reject('Falha ao listar Produto!')});
    }

    public saveProduto(produto): Promise<any> {
      return this.http.post(`${environment.url}/produtos`, produto)
      .toPromise()
      .catch(erro => {return Promise.reject('Falha ao Cadastrar Produto, verifique os dados!')});
    }

    public deleteProduto(id): Promise<any> {
      return this.http.delete(`${environment.url}/produtos/${id}`)
      .toPromise()
      .catch(erro => {return Promise.reject('Falha ao deletar o Produto {id}!')});
    }

    public salvarCategoria(categoria):Promise<any> {
      return this.http.post(`${environment.url}/categorias`, categoria)
      .toPromise()
      .catch(erro => {return Promise.reject('Falha ao Cadastrar Categoria!')});
    }

    public deleteCategoria(id): Promise<any> {
      return this.http.delete(`${environment.url}/categorias/${id}`)
      .toPromise()
      .catch(erro => {return Promise.reject('Falha ao deletar o Produto {id}!')});
    }

    public getCategorias(): Observable <any>{
      return this.http.get(`${environment.url}/categorias`)
    }
   }