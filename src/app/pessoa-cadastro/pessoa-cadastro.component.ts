import { EnderecoService } from './../endereco.service';
import { Cidade, Endereco, Estado } from './../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {
  endereco = new Endereco();
  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {
  }

  public buscarEnderecoPorCep(cep) {
    this.enderecoService.getEndereco(cep).subscribe(resposta => {
      this.endereco = resposta;
    })
  }
}
