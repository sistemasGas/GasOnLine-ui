import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

    public getProdutos(): Observable <any> {
      return this.http.get(`${environment.url}/produtos`);
    }

    public getProdutosPorId(id): Observable <any> {
      return this.http.get(`${environment.url}/produtos/${id}`);
    }

    public buscarValorEstoque():Observable <any> {
      return this.http.get(`${environment.url}/produtos/valorestoque`);
    }

    public saveProduto(produto): Observable<any> {
      return this.http.post(`${environment.url}/produtos`, produto);
    }

    public deleteProduto(id): Observable<any> {
      return this.http.delete(`${environment.url}/produtos/${id}`);
    }

    public salvarCategoria(categoria):Observable<any> {
      return this.http.post(`${environment.url}/categorias`, categoria);
    }

    public deleteCategoria(id): Observable<any> {
      return this.http.delete(`${environment.url}/categorias/${id}`);
    }

    public getCategorias(): Observable <any>{
      return this.http.get(`${environment.url}/categorias`)
    }

    public getPessoas(): Observable <any>{
      return this.http.get(`${environment.url}/pessoas`)
    }

   }

