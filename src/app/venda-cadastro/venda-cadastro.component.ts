import { VendaService } from './../venda.service';
import { UsuarioService } from './../usuario.service';
import { ProdutoService } from './../produto.service';
import { Pessoa, Produto, Venda, ItemVenda } from './../core/model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

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

  itensVenda: ItemVenda[];
  venda = new Venda();

  constructor(private produtoService: ProdutoService,
    private usuarioService: UsuarioService,
    private vendaService: VendaService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.listarProdutos();
    this.listarClientes();
  }

  private listarProdutos() {
    this.produtoService.getProdutos().subscribe(produto => this.produtosDisponiveis = produto);
    this.itensVenda = [];
  }

  public listarClientes() {
    this.usuarioService.getUsuarios().subscribe(resposta => {
      this.pessoas = resposta;
    });
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
        this.produtosDisponiveis = [...this.produtosDisponiveis, this.itensVenda[i].produto];
        this.itensVenda.splice(i, 1);
      } else if (id === this.itensVenda[i].produto.id) {
        this.itensVenda[i].quantidade--;
      }
    }
    this.calculaValorTotal();
  }

  adicionarItem(itemVenda) {
    let id = itemVenda.produto.id;
    for (let i = 0; i < this.itensVenda.length; i++) {
      if (id === this.itensVenda[i].produto.id) {
        this.itensVenda[i].quantidade++;
      }
    }
    this.calculaValorTotal();
  }

  calculaValorTotal(){
    let total = this.itensVenda.reduce((total, valor)=> total + (valor.quantidade*valor.produto.valorVenda),0);
    this.venda.valorTotal = total;
  }


  criarVenda() {
    console.log(this.venda);
    this.vendaService.post(this.venda).subscribe(resposta => {
      if (this.venda.codigo) {
        this.messageService.add({ severity: 'success', summary: 'Venda Atualizada!', detail: '' });
      }
      else {
        this.messageService.add({ severity: 'success', summary: 'Venda Cadastrada!', detail: '' });
      }
      this.venda = null;
    });

  }
}
