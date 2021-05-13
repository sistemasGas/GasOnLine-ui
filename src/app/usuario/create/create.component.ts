import { UsuarioService } from './../../usuario.service';
import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Pessoa } from 'src/app/core/model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

usuario = new Pessoa();

    cargos = [
      { label: "Administrador", value: "Administrador" },
      { label: "Vendedor", value: "Vendedor" }
    ]
    categorias = [
      { label: "Cliente | Fornecedor", value: "CLIFOR" },
      { label: "Funcionário", value: "FUNC" }
    ]

    tipoPessoas = [
      { label: "Física", value: "FISICA" },
      { label: "Jurídica", value: "JURIDICA" }
    ]
    
  constructor(public usuarioService: UsuarioService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idPessoa = this.route.snapshot.params['id'];
    this.readById(idPessoa);
  }

  get edicao() {
    return Boolean(this.usuario.id);
  }

  createUsuario() {
    console.log(this.usuario);
    this.usuarioService.salvarUsuario(this.usuario).subscribe(resposta => {
      if (this.usuario.id) {
        this.messageService.add({ severity: 'success', summary: 'Usuário Atualizado!', detail: '' });
      }
      else {
        this.messageService.add({ severity: 'success', summary: 'Usuário Cadastrado!', detail: '' });
      }
      this.usuario = { id: null, nome: "", telefone: "", email: "", cpf: "", cnpj:"", endereco: null, categoria: "", cargo: "", tipo:"" };

    });
  }

  readById(idPessoa){
    this.usuarioService.readById(idPessoa).subscribe(resposta => {
      this.usuario = resposta;
    })
  }

}
