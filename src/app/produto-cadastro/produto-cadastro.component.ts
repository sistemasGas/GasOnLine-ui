import { Subscription } from 'rxjs';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Produto, Categoria } from './../core/model';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {
  exibiNovaCategoria = false;
  categorias = [];
  produto = new Produto();
  categoria = new Categoria();

  constructor(
    public produtoService: ProdutoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.listarCategorias();
    const idProduto = this.route.snapshot.params['id'];
    if (idProduto) {
      this.buscarProdutoPorId(idProduto);
    }
  }

  get edicao() {
    return Boolean(this.produto.id);
  }

  criarCategoria() {
    this.produtoService.salvarCategoria(this.categoria).subscribe(resposta => {
      this.messageService.add({ severity: 'success', summary: 'Nova categoria cadastrada!', detail: '' });
      this.fechaNovaCategoria();
      this.listarCategorias();
      this.categoria = { codigo: null, descricao: '', sigla: '' }
    })
  }

  public deleteCategoria(codigo) {
    console.log(codigo)
    this.confirmationService.confirm({
      message: 'Confirma exclusão?',
      accept: () => {
        this.produtoService.deleteCategoria(codigo).subscribe(r => {
          this.listarCategorias();
          this.messageService.add({ severity: 'success', summary: 'Categoria excluída com sucesso!', detail: '' });
        });
      }
    })

  }

  criarProduto() {
    this.produtoService.saveProduto(this.produto).subscribe(resposta => {
      if (this.produto.id) {
        this.messageService.add({ severity: 'success', summary: 'Produto Atualizado!', detail: '' });
      }
      else {
        this.messageService.add({ severity: 'success', summary: 'Produto Cadastrado!', detail: '' });
      }
      this.produto = { id: null, descricao: "", valorCompra: 0.0, valorVenda: 0.0, categoria: null, quantidadeEstoque: 0.0 };
    });

  }

  chamaNovaCategoria() {
    this.exibiNovaCategoria = true;
  }

  fechaNovaCategoria() {
    this.exibiNovaCategoria = false;
  }

  public listarCategorias() {
    this.produtoService.getCategorias().subscribe(resposta => {
      this.categorias = resposta;
    });
  }

  public buscarProdutoPorId(id) {
    this.produtoService.getProdutosPorId(id).subscribe(resposta => {
      this.produto = resposta;
    })
  }
}
