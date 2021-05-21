import { UsuarioService } from './../usuario.service';
import { ProdutoService } from './../produto.service';
import { Pessoa, Produto, Venda } from './../core/model';
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
  venda = new Venda();

  constructor(private produtoService: ProdutoService,
              private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.listarProdutos();
    this.listarClientes();
  }

  private listarProdutos(){
    this.produtoService.getProdutos().subscribe(produto => this.produtosDisponiveis = produto);
        this.produtosSelecionados = [];
  }

  public listarClientes() {
    this.usuarioService.getUsuarios().subscribe(resposta => {
      this.pessoas = resposta;
    });
  }

}
