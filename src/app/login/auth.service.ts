import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Usuario } from '../core/model';
import { LoginService } from '../login.service';
import { userInfo } from 'node:os';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';


@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  userLogin: Usuario={login:'',senha:''};
  //get isLoggedIn() {
  //  return this.loggedIn.asObservable();
  //}

  constructor(private router: Router, private loginService: LoginService, private messageService: MessageService) {

  }
  public findByCPF(login) {
    this.loginService.findByCPF(login).subscribe(resposta => {
      this.userLogin = resposta;
      console.log(this.userLogin)
    })
  }

  fazerLogin(usuario: Usuario){
    console.log (usuario);
    this.findByCPF(usuario.login);
    //var n = this.userteste.login.localeCompare(usuario.login+"")
    setTimeout(()=>{
      if ( this.userLogin.login === usuario.login && this.userLogin.senha === usuario.senha ) {

        this.usuarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true);
        this.messageService.add({ severity: 'success', summary: 'Acesso Liberado!', detail: '' });
        this.router.navigate(['/home']);
        console.log(usuario + "......Usuario Logado......");

      } else {
        this.usuarioAutenticado = false;

        this.mostrarMenuEmitter.emit(false);
        this.messageService.add({ severity: 'error', summary: 'Login ou Senha Invalido!', detail: '' });
        console.log(usuario + "......Usuario/Senha diferente do Banco......");
      }
    },2000)
  }

  //logout() {
    //this.loggedIn.next(false);
    //this.router.navigate(['/login']);
  //}

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
