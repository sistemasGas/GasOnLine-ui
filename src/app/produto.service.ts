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

    public saveProduto(produto): Observable<any> {
      return this.http.post(`${environment.url}/produtos`, produto);
    }

    public deleteProduto(id): Observable<any> {
      return this.http.delete(`${environment.url}/produtos/${id}`);
    }

   }

