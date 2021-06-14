import { ItemVenda, Venda } from './../core/model';
import { ProdutoService } from './../produto.service';
import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Pessoa } from '../core/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendas-pesquisa',
  templateUrl: './vendas-pesquisa.component.html',
  styleUrls: ['./vendas-pesquisa.component.css']

})
export class VendasPesquisaComponent implements OnInit {
  items: MenuItem[];
  subscription: Subscription;
  activeIndex: number = 1;
  clientes: Pessoa[];
  venda = new Venda();

  constructor(private messageService: MessageService,
    private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
    this.items = [{
      label: 'Personal',
      routerLink: 'personal'
      },
      {
      label: 'Seat',
      routerLink: 'seat'
      },
      {
      label: 'Payment',
      routerLink: 'payment'
      },
      {
      label: 'Confirmation',
      routerLink: 'confirmation'
      }
    ];

    this.listarClientes();

  }

  public listarClientes() {
    this.produtoService.getPessoas().subscribe(resposta => {
      this.clientes = resposta;
    });
  }

  public proximaPagina(){
    this.router.navigate(['steps/seat']);
  }
}

