import { UsuarioService } from './../usuario.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { VendaService } from '../venda.service';
import { Venda } from '../core/model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css',],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  valorEstoque;
  valorVendas;
  clientes;
  vendas: Venda[];

  constructor(public produtoService: ProdutoService,
              public usuarioService: UsuarioService,
              public vendaService: VendaService) { }

  ngOnInit(){
    this.buscarValorEstoque();
    this.buscarQuantidadeClientes();
    this.buscarVendas();
    this.buscarTotalVendas()
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

  public buscarTotalVendas(){
    this.vendaService.buscarTotalVendas().subscribe(resposta => {
      this.valorVendas = resposta;
    });
  }

  public buscarVendas(){
    this.vendaService.findAll().subscribe(resposta => {
      this.vendas = resposta;
    });
  }

}


