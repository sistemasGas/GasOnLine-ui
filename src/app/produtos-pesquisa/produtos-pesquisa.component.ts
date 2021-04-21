import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-produtos-pesquisa',
  templateUrl: './produtos-pesquisa.component.html',
  styleUrls: ['./produtos-pesquisa.component.css']
})
export class ProdutosPesquisaComponent implements OnInit {
  produtos;
  ProdutoSelcionado;
  edicao = false;
  constructor(public dataService: DataService) { }

  ngOnInit(){
    this.listar();
    }


    public listar() {
      this.dataService.getProdutos().subscribe(resposta => {
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
      this.dataService.saveProduto(this.ProdutoSelcionado).subscribe(r => {
        this.edicao = false;
        this.listar();
      });
    }

    public deleteProduto(produto) {
      this.dataService.deleteProduto(produto.id).subscribe(r => {
        this.listar();
      });
    }

  }
