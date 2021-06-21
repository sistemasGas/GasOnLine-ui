import { VendaService } from './../venda.service';
import { UsuarioService } from './../usuario.service';
import { ProdutoService } from './../produto.service';
import { Pessoa, Produto, Venda, ItemVenda } from './../core/model';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from '../core/error-handler.service';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.css']
})
export class VendaCadastroComponent implements OnInit {

  pessoas = [];
  today = new Date();
  produtosDisponiveis: Produto[];
  produtosSelecionados: Produto[];
  produtoArrastado: Produto;
  itemVenda: ItemVenda;
  itensVenda: ItemVenda[];
  venda = new Venda();
  butons: MenuItem[];
  tipoPagamento = [
    { label: "Dinheiro", value: "DINHEIRO" },
    { label: "Cartão", value: "CARTAO" }
  ]

  constructor(private produtoService: ProdutoService,
    private usuarioService: UsuarioService,
    private vendaService: VendaService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.listarProdutos();
    this.listarClientes();
    this.itensVenda = [];
    this.butons = [
      {
        label: 'Orçamento', icon: 'pi pi-book', command: () => {
          this.criarOrcamento();
        }
      },
      {
        label: 'Emitir Venda', icon: 'pi pi-shopping-cart', command: () => {
          this.criarVenda();
        }
      },
      { separator: true },
      {
        label: 'Cancelar', icon: 'pi pi-times', routerLink: ['/home'], command: () => {
          this.cancelarVenda();
        }
      }
    ];

    const vendaID = this.route.snapshot.params['id'];
    if (vendaID) {
      this.buscarVendaPorId(vendaID);
    }
  }

  get edicao() {
    return Boolean(this.venda.codigo);
  }

  public listarProdutos() {
    this.produtoService.getProdutos().then(resposta => {
      this.produtosDisponiveis = resposta;
    })
    .catch(erro => this.errorHandler.handler(erro));
  }

  public listarClientes() {
    this.usuarioService.getUsuarios().then(resposta => {
      this.pessoas = resposta;
    })
    .catch(erro => this.errorHandler.handler(erro));
  }

  public buscarVendaPorId(vendaID) {
    this.vendaService.findById(vendaID).then(resposta => {
      this.venda = resposta;
      this.itensVenda = this.venda.itensVenda;
    })
    .catch(erro => this.errorHandler.handler(erro));;;
  }

  dragStart(produto: Produto) {
    this.produtoArrastado = produto;
  }

  addProduto(produto: Produto) {
    this.produtoArrastado = produto;
    this.drop();
    this.dragEnd();
  }

  drop() {
    if (this.produtoArrastado) {
      const itemVendaArrastado = new ItemVenda();
      itemVendaArrastado.produto = this.produtoArrastado;
      itemVendaArrastado.quantidade = 1;
      itemVendaArrastado.valorUnitario = this.produtoArrastado.valorVenda
      let draggedProductIndex = this.findIndex(this.produtoArrastado);
      this.itensVenda = [...this.itensVenda, itemVendaArrastado];
      this.produtosDisponiveis = this.produtosDisponiveis.filter((val, i) => i != draggedProductIndex);
      this.produtoArrastado = null;
      this.calculaValorTotal();
    }
  }

  dragEnd() {
    this.produtoArrastado = null;
  }

  findIndex(produto: Produto) {
    let index = -1;
    for (let i = 0; i < this.produtosDisponiveis.length; i++) {
      if (produto.id === this.produtosDisponiveis[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }

  removerItem(itemVenda) {
    let id = itemVenda.produto.id;
    for (let i = 0; i < this.itensVenda.length; i++) {
      if (id === this.itensVenda[i].produto.id && this.itensVenda[i].quantidade === 1) {
        this.itensVenda[i].produto.quantidadeEstoque++;
        this.produtosDisponiveis = [...this.produtosDisponiveis, this.itensVenda[i].produto];
        this.itensVenda.splice(i, 1);
      } else if (id === this.itensVenda[i].produto.id) {
        this.itensVenda[i].produto.quantidadeEstoque++;
        this.itensVenda[i].quantidade--;
      }
    }
    this.messageService.add({ severity: 'warn', summary: 'Item Removido!', detail: '' });
    this.calculaValorTotal();
  }
  adicionarItem(itemVenda) {
    let id = itemVenda.produto.id;
    itemVenda.produto.quantidadeEstoque--;
    for (let i = 0; i < this.itensVenda.length; i++) {
      if (id === this.itensVenda[i].produto.id && this.itensVenda[i].produto.quantidadeEstoque > 0) {
        this.itensVenda[i].quantidade++;
        this.messageService.add({ severity: 'success', summary: 'Item Adicionado!', detail: '' });
      } else if (id === this.itensVenda[i].produto.id) {
        this.messageService.add({ severity: 'error', summary: 'Item Esgotado!!!', detail: '' });
      }
    }
    this.calculaValorTotal();
  }

  calculaValorTotal() {
    let total = this.itensVenda.reduce((total, valor) => total + (valor.quantidade * valor.valorUnitario), 0);
    this.venda.valorTotal = total;
  }

  criarVenda() {
    this.venda.itensVenda = this.itensVenda;
    this.venda.status = "EMITIDA"
    this.vendaService.post(this.venda).then(resposta => {
      if (this.venda.codigo) {
        this.messageService.add({ severity: 'success', summary: 'Venda Atualizada!', detail: '' });
      }
      else {
        this.messageService.add({ severity: 'success', summary: 'Venda Cadastrada!', detail: '' });
      }
      this.router.navigate(['/home'])
      this.venda = null;
    })
    .catch(erro => this.errorHandler.handler(erro));
  }


  criarOrcamento() {
    if (this.venda.status === "ORCAMENTO") {
      this.messageService.add({ severity: 'error', summary: 'Item já é um Orçamento, Efetive ou cancele!!!', detail: '' });
    }
    else {
      this.venda.status = "ORCAMENTO";
      this.venda.itensVenda = this.itensVenda;
      this.vendaService.post(this.venda).then(resposta => {
        if (this.venda.codigo) {
          this.messageService.add({ severity: 'info', summary: 'Orçamento Atualizado!', detail: '' });
        }
        else {
          this.messageService.add({ severity: 'info', summary: 'Orçamento Cadastrado!', detail: '' });
        }
        this.router.navigate(['/home'])
        this.venda = null;
      })
      .catch(erro => this.errorHandler.handler(erro));
    }
  }

  cancelarVenda() {
    if (this.venda.status === "CANCELADA") {
      this.messageService.add({ severity: 'error', summary: 'Venda ja cancelada!!!', detail: '' });
    }
    else {
      this.venda.status = "CANCELADA";
      this.vendaService.post(this.venda).then(resposta => {
        this.messageService.add({ severity: 'success', summary: 'Cancelado com Sucesso', detail: '' });
        this.router.navigate(['/home'])
        this.venda = null;
      }).catch(erro => this.errorHandler.handler(erro));
    }
  }
}
