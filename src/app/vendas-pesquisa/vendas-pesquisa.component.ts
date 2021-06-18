import { ItemVenda, Venda } from './../core/model';
import { ProdutoService } from './../produto.service';
import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Pessoa } from '../core/model';
import { Router } from '@angular/router';
import { VendaService } from '../venda.service';
import { ErrorHandlerService } from '../core/error-handler.service';

@Component({
  selector: 'app-vendas-pesquisa',
  templateUrl: './vendas-pesquisa.component.html',
  styleUrls: ['./vendas-pesquisa.component.css']

})
export class VendasPesquisaComponent implements OnInit {
  
  vendas: Venda[];

  constructor(private messageService: MessageService,
    private produtoService: ProdutoService,
    private vendaService: VendaService,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.listarVendas()
  }

  private listarVendas() {
    this.vendaService.findAll().then(resposta => {
      this.vendas = resposta;
    })
    .catch(erro => this.errorHandler.handler(erro));
  }
  
}

