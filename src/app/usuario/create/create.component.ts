import { LoginService } from './../../login.service';
import { Login } from './../../core/model';
import { UsuarioService } from './../../usuario.service';
import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig, ConfirmationService } from 'primeng/api';
import { Pessoa } from 'src/app/core/model';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  // providers: [MessageService],
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  [x: string]: any;

  // items: MenuItem[];
  // activeIndex: number = 1;

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
    private confirmationService: ConfirmationService,
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
      this.usuario = {
        id: null, nome: "", telefone: "", email: "", cpf: "",
        cnpj: "", endereco: null, categoria: "", cargo: "", tipo: ""};
    });
  }
  // createLogin() {
  //   console.log(this.login);
  //   this.loginService.salvarLogin(this.login).subscribe(resposta => {
  //     if (this.login.id) {
  //       this.messageService.add({ severity: 'success', summary: 'Login Atualizado!', detail: '' });
  //     }
  //     else {
  //       this.messageService.add({ severity: 'success', summary: 'Login Cadastrado!', detail: '' });
  //     }
  //     this.login = { id: null, login: "", senha: "" };
  //   });
  // }

  // createPessoaLogin() {
  //   this.createUsuario();
  //   this.createLogin();
  // }
  readById(idPessoa) {
    this.usuarioService.readById(idPessoa).subscribe(resposta => {
      this.usuario = resposta;
    })
  }

  // login



}
