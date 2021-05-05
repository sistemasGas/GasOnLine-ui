import { ProdutoService } from './../produto.service';
import { Produto } from './../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.css']
})
export class VendaCadastroComponent implements OnInit {

  produtosDisponiveis: Produto[];
  produtosSelecionados: Produto[];
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(produto => this.produtosDisponiveis = produto);
        this.produtosSelecionados = [];
  }

}
