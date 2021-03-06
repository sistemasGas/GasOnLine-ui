import { ProdutosPesquisaComponent } from './../produtos-pesquisa/produtos-pesquisa.component';
import { Subscription } from 'rxjs';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Produto, Categoria } from './../core/model';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { utilsBr, fakerBr } from 'js-brasil';
import { ErrorHandlerService } from '../core/error-handler.service';


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
  public MASKS = utilsBr.MASKS;
  public formFields;

  constructor(
    public produtoService: ProdutoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
    private route: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,
    private errorHandler: ErrorHandlerService) {

  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.listarCategorias();
    const idProduto = this.route.snapshot.params['id'];
    if (idProduto) {
      this.buscarProdutoPorId(idProduto);
    }

    this.formFields = {
      descricao: ['', Validators.required],
      quantidadeEstoque: ['', Validators.required],
      valorCompra: ['', Validators.required],
      valorVenda: ['', Validators.required]
    }

  }

  get edicao() {
    return Boolean(this.produto.id);
  }

  criarCategoria() {
    this.produtoService.salvarCategoria(this.categoria)
    .then(resposta => {
      this.messageService.add({ severity: 'success', summary: 'Nova categoria cadastrada!', detail: '' });
      this.fechaNovaCategoria();
      this.listarCategorias();
      this.categoria = { codigo: null, descricao: '', sigla: '' }
    })
    .catch(erro => this.errorHandler.handler(erro));
  }

  public deleteCategoria(codigo) {
    console.log(codigo)
    this.confirmationService.confirm({
      message: 'Confirma exclus??o?',
      accept: () => {
        this.produtoService.deleteCategoria(codigo).then(r => {
          this.listarCategorias();
          this.messageService.add({ severity: 'success', summary: 'Categoria exclu??da com sucesso!', detail: '' });
        })
        .catch(erro => this.errorHandler.handler(erro));
      }
    })

  }

  criarProduto() {
    this.produtoService.saveProduto(this.produto)
    .then(resposta => {
      if (this.produto.id) {
        this.messageService.add({ severity: 'success', summary: 'Produto Atualizado!', detail: '' });
      }
      else {
        this.messageService.add({ severity: 'success', summary: 'Produto Cadastrado!', detail: '' });
      }
      this.router.navigate(['/produtos/pesquisa'])
      this.produto = { id: null, descricao: "", valorCompra: 0.0, valorVenda: 0.0, categoria: null, quantidadeEstoque: 0.0, imagem: "" };
    })
    .catch(erro => this.errorHandler.handler(erro));
  }

  chamaNovaCategoria() {
    this.exibiNovaCategoria = true;
  }

  fechaNovaCategoria() {
    this.exibiNovaCategoria = false;
  }

  public listarCategorias() {
    this.produtoService.getCategorias().then(resposta => {
      this.categorias = resposta;
    })
    .catch(erro => this.errorHandler.handler(erro));
  }

  public buscarProdutoPorId(id) {
    this.produtoService.getProdutosPorId(id)
    .then(resposta => {this.produto = resposta;
    })
    .catch(erro => this.errorHandler.handler(erro));
  }
}
