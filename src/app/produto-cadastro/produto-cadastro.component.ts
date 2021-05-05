import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Produto } from './../core/model';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';


@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  categorias = [];
  product = new Produto();

  constructor(
    public produtoService: ProdutoService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig) {

  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.listarCategorias();
  }

  criarProduto() {
    this.produtoService.saveProduto(this.product).subscribe(resposta => {
      this.messageService.add({severity:'success', summary: 'Produto Cadastrado!', detail: ''});
      this.product = { id: null, descricao: "", valorCompra: 0.0, valorVenda: 0.0, categoria: null, quantidadeEstoque: 0.0 };
    });

  }

  public listarCategorias() {
    this.produtoService.getCategorias().subscribe(resposta => {
      this.categorias = resposta;
    });
  }
}
