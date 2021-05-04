import { ConfirmationService, MessageService } from 'primeng/api';
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
              private messageService: MessageService) { }

  ngOnInit(){
    this.listar();
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
    }

    public cancelar() {
      this.edicao = false;
    }

    public salvar() {
      this.produtoService.saveProduto(this.ProdutoSelcionado).subscribe(r => {
        this.edicao = false;
        this.listar();
      });
    }

    public deleteProduto(produto) {
      this.confirmationService.confirm({message: 'Confirma exclusão?',
      accept: () => {
        this.produtoService.deleteProduto(produto.id).subscribe(r => {
          this.listar();
          this.messageService.add({severity:'success', summary:'Excluído com sucesso!', detail:''});
        });
      }})

    }

  }
