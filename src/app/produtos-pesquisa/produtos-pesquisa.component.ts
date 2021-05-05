import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos-pesquisa',
  templateUrl: './produtos-pesquisa.component.html',
  styleUrls: ['./produtos-pesquisa.component.css']
})
export class ProdutosPesquisaComponent implements OnInit {
  produtos;
  ProdutoSelcionado;
  edicao = false;

  constructor(public produtoService: ProdutoService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private primengConfig: PrimeNGConfig) { }

  ngOnInit(){
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
    public editar() {
      this.edicao = true;
      this.messageService.add({severity:'success', summary: 'Editado com sucesso', detail: ''});
    }

    public cancelar() {
      this.edicao = false;
    }

    public deleteProduto(produto) {
      this.confirmationService.confirm({message: 'Confirma exclusão?',
      accept: () => {
        this.produtoService.deleteProduto(produto.id).subscribe(r => {
          this.listar();
          this.messageService.add({severity:'success', summary: 'Excluído com sucesso', detail: ''});
        });
      }})

    }

  }
