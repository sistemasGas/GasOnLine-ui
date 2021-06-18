import { EnderecoService } from './../endereco.service';
import { Cidade, Endereco, Estado } from './../core/model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {
  endereco = new Endereco();
  constructor(private enderecoService: EnderecoService,
              private messageService: MessageService,) { }

  ngOnInit(): void {
  }

  public buscarEnderecoPorCep(cep) {
    this.enderecoService.getEndereco(cep).subscribe(resposta => {
      this.endereco = resposta;
    })
  }

  public salvarEndereco(){
    console.log(this.endereco)
    this.enderecoService.post(this.endereco).subscribe(resposta =>{
      if (this.endereco.codigo) {
        this.messageService.add({ severity: 'success', summary: 'Endereço Atualizada!', detail: '' });
      }
      else {
        this.messageService.add({ severity: 'success', summary: 'Endereço Cadastrada!', detail: '' });
      }
      this.endereco = null;
    })
  }
}
