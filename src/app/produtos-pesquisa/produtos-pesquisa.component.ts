import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../core/model';
import { ErrorHandlerService } from '../core/error-handler.service';

@Component({
  selector: 'app-produtos-pesquisa',
  templateUrl: './produtos-pesquisa.component.html',
  styleUrls: ['./produtos-pesquisa.component.css']
})
export class ProdutosPesquisaComponent implements OnInit {
  produtos: Produto[];
  ProdutoSelcionado;
  edicao = false;

  constructor(public produtoService: ProdutoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.listar();
    this.primengConfig.ripple = true;
  }


  public listar() {
    this.produtoService.getProdutos().subscribe(resposta => {
      this.produtos = resposta;
    });
  }

  public selecionarProduto(produto) {
    this.ProdutoSelcionado = produto;
  }

  public cancelar() {
    this.edicao = false;
  }

  public deleteProduto(produto) {
    this.confirmationService.confirm({
      message: 'Confirma exclusão?',
      accept: () => {
        this.produtoService.deleteProduto(produto.id)
        .then(r => {
          this.messageService.add({ severity: 'success', summary: 'Excluído com sucesso', detail: '' });

          for (let i = 0; i < this.produtos.length; i++) {
            if (produto.id === this.produtos[i].id) {
              this.produtos.splice(i, 1)
            }
          }
        })
        .catch(erro => this.errorHandler.handler(erro));
      }
    });
  }

}
