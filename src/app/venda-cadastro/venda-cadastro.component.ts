import { UsuarioService } from './../usuario.service';
import { ProdutoService } from './../produto.service';
import { Pessoa, Produto, Venda, ItemVenda } from './../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.css']
})
export class VendaCadastroComponent implements OnInit {

  pessoas = [];
  produtosDisponiveis: Produto[];
  produtosSelecionados: Produto[];
  produtoArrastado: Produto;

  venda = new Venda();

  constructor(private produtoService: ProdutoService,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.listarProdutos();
    this.listarClientes();
  }

  private listarProdutos() {
    this.produtoService.getProdutos().subscribe(produto => this.produtosDisponiveis = produto);
    this.produtosSelecionados = [];
  }

  public listarClientes() {
    this.usuarioService.getUsuarios().subscribe(resposta => {
      this.pessoas = resposta;
    });
  }

  dragStart(produto: Produto) {
    this.produtoArrastado = produto;
  }

  drop() {
    if (this.produtoArrastado) {
      let draggedProductIndex = this.findIndex(this.produtoArrastado);
      this.produtosSelecionados = [...this.produtosSelecionados, this.produtoArrastado];
      this.produtosDisponiveis = this.produtosDisponiveis.filter((val, i) => i != draggedProductIndex);
      this.produtoArrastado = null;
    }
  }

  dragEnd() {
    this.produtoArrastado = null;
}

  findIndex(produto: Produto) {
    let index = -1;
    for(let i = 0; i < this.produtosDisponiveis.length; i++) {
        if (produto.id === this.produtosDisponiveis[i].id) {
            index = i;
            break;
        }
    }
    return index;
}

}
