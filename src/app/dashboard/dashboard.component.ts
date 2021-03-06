import { UsuarioService } from './../usuario.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { VendaService } from '../venda.service';
import { Venda } from '../core/model';
import { ErrorHandlerService } from '../core/error-handler.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css',],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  valorEstoque;
  valorVendas;
  totalItens;
  clientes;
  vendas: Venda[];

  constructor(public produtoService: ProdutoService,
    public usuarioService: UsuarioService,
    public vendaService: VendaService,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.buscarValorEstoque();
    this.buscarQuantidadeClientes();
    this.buscarVendas();
    this.buscarTotalVendas();
    this.buscarTotalItensVendidos()
  }

  public buscarValorEstoque() {
    this.produtoService.buscarValorEstoque().then(resposta => {
      this.valorEstoque = resposta;
    })
      .catch(erro => this.errorHandler.handler(erro));
  }

  public buscarQuantidadeClientes() {
    this.usuarioService.buscarQuantidadeClientes().then(resposta => {
      this.clientes = resposta;
    })
    .catch(erro => this.errorHandler.handler(erro));
  }

  public buscarTotalVendas() {
    this.vendaService.buscarTotalVendas().then(resposta => {
      this.valorVendas = resposta;
    })
      .catch(erro => this.errorHandler.handler(erro));
  }

  public buscarTotalItensVendidos() {
    this.vendaService.buscarTotalItensVendidos().then(resposta => {
      this.totalItens = resposta;
    })
      .catch(erro => this.errorHandler.handler(erro));
  }

  public buscarVendas() {
    this.vendaService.findAll().then(resposta => {
      this.vendas = resposta;
    })
      .catch(erro => this.errorHandler.handler(erro));
  }

}


