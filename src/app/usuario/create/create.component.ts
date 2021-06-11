import { UsuarioLoginComponent } from './../usuario-login/usuario-login.component';
import { LoginService } from './../../login.service';
import { Endereco, Login} from './../../core/model';
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

  // login: Login = {
  //   id: '',
  //   usuario: '',
  //   senha: ''
  // }
  

  // novaPessoa: Pessoa = {
  //   id: '',
  //   nome: '',
  //   telefone: '',
  //   email: '',
  //   tipo: '',
  //   cpf: '',
  //   cnpj: '',
  //   categoria: '',
  //   cargo: '',
  //   endereco: this.endereco,
  //   login: Login;
    
  // }
  // [x: string]: any;

  // items: MenuItem[];
  // activeIndex: number = 1;

  usuario = new Pessoa();
  user = new Login();




  endereco: Endereco;

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

  // get edicao() {
  //   return Boolean(this.novaPessoa.id);
  // }

  createUsuario() {
 
    this.usuario.usuario = this.user;
    console.log(this.usuario);
    this.usuarioService.salvarUsuario(this.usuario).subscribe(resposta => {
      if (this.usuario.id) {
        this.messageService.add({ severity: 'success', summary: 'Usuário Atualizado!', detail: '' });
      }
      else {
        this.messageService.add({ severity: 'success', summary: 'Usuário Cadastrado!', detail: '' });
      }
      this.usuario = new Pessoa();
      // location.reload;

    });
  }

  readById(idPessoa) {
    this.usuarioService.readById(idPessoa).subscribe(resposta => {
      this.usuario = resposta;
    });
  }

  // create(): void {
  //   console.log(this.novaPessoa);
  //   this.usuarioService.salvarUsuario(this.novaPessoa).subscribe((resposta) => {
  //     if (this.novaPessoa.id) {
  //       this.messageService.add({ severity: 'success', summary: 'Usuário Atualizado!', detail: '' });
  //     }
  //     else {
  //       this.messageService.add({ severity: 'success', summary: 'Usuário Cadastrado!', detail: '' });
  //     }
  //     location.reload;
  //   });
  // }
}
