
import { MessageService, PrimeNGConfig, ConfirmationService } from 'primeng/api';
import { LoginService } from './../../login.service';
import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/core/model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  login = new Login();
  perfil = [
    { label: "Administrador", value: "Administrador" },
    { label: "Vendedor", value: "Vendedor" },
    { label: "Serviços Gerais", value: "Serviços Gerais" }
  ]


  constructor(public loginService: LoginService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idLogin = this.route.snapshot.params['id'];
    this.readById(idLogin);
  }
  readById(idLogin) {
    this.loginService.readById(idLogin).subscribe(resposta => {
      this.login = resposta;
    })
  }

  get edicao() {
    return Boolean(this.login.id);
  }

  createLogin() {
    console.log(this.login);
    this.loginService.salvarLogin(this.login).subscribe(resposta => {
      if (this.login.id) {
        this.messageService.add({ severity: 'success', summary: 'Login Atualizado!', detail: '' });
      }
      else {
        this.messageService.add({ severity: 'success', summary: 'Login Cadastrado!', detail: '' });
      }
      this.login = { id: null, login: "", senha: "", perfil: "" };

    });
  }






}
