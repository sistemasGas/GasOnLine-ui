import { EnderecoService } from './../endereco.service';
import { Cidade, Endereco, Estado } from './../core/model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from '../core/error-handler.service';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {
  endereco = new Endereco();
  constructor(private enderecoService: EnderecoService,
              private messageService: MessageService,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
  }

  public buscarEnderecoPorCep(cep) {
    this.enderecoService.getEndereco(cep).then(resposta => {
      this.endereco = resposta;
    })
    .catch(erro => this.errorHandler.handler(erro));
  }

  public salvarEndereco(){
    console.log(this.endereco)
    this.enderecoService.post(this.endereco).then(resposta =>{
      if (this.endereco.codigo) {
        this.messageService.add({ severity: 'success', summary: 'Endereço Atualizada!', detail: '' });
      }
      else {
        this.messageService.add({ severity: 'success', summary: 'Endereço Cadastrada!', detail: '' });
      }
      this.endereco = null;
    })
    .catch(erro => this.errorHandler.handler(erro));
  }
}
