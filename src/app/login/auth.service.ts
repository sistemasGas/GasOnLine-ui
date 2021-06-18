import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { Usuario } from '../core/model';
import { LoginService } from '../login.service';
import { userInfo } from 'node:os';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';


@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  userteste: Usuario={login:'',senha:''};
  //get isLoggedIn() {
  //  return this.loggedIn.asObservable();
  //}

  constructor(private router: Router, private loginService: LoginService) {

  }
  public findByCPF(login) {
    this.loginService.findByCPF(login).subscribe(resposta => {
      this.userteste = resposta;
      console.log(this.userteste)
    })
  }

  fazerLogin(usuario: Usuario){
    console.log (usuario);
    this.findByCPF(usuario.login);
    //var n = this.userteste.login.localeCompare(usuario.login+"")
    setTimeout(()=>{
      if ( this.userteste.login === usuario.login) {

        this.usuarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true);

        this.router.navigate(['/']);
        console.log(usuario + "entrei no if");

      } else {
        this.usuarioAutenticado = false;

        this.mostrarMenuEmitter.emit(false);
        console.log(usuario + "entrei no else");
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
