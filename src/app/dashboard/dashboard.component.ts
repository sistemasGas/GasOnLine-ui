import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  valorEstoque;
  clientes;

  constructor(public produtoService: ProdutoService,
              public usuarioService: UsuarioService) { }

  ngOnInit(){
    this.buscarValorEstoque();
    this.buscarQuantidadeClientes();
    }

  public buscarValorEstoque(){
    this.produtoService.buscarValorEstoque().subscribe(resposta => {
      this.valorEstoque = resposta;
    });
  }

  public buscarQuantidadeClientes(){
    this.usuarioService.buscarQuantidadeClientes().subscribe(resposta => {
      this.clientes = resposta;
    });
  }

}


