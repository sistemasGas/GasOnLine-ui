import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  produto: { id, descricao, valorCompra, valorVenda, categoria, quantidadeEstoque } = { id: null, descricao: "", valorCompra: 0.0, valorVenda: 0.0, categoria: "", quantidadeEstoque:0.00 };

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  criarProduto() {
    console.log(this.produto);
    this.dataService.saveProduto(this.produto).subscribe(resposta => {
      this.produto = { id: null, descricao: "", valorCompra: 0.0, valorVenda: 0.0, categoria: "", quantidadeEstoque:0.00 };
    });

  }

}
