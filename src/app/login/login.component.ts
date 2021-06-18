import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { AuthService } from './auth.service';
import { Usuario } from '../core/model';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 usuario  = new Usuario();

  constructor(private authSevice: AuthService,
    private loginService: LoginService,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    //this.fazerLogin();
    //const usuarioService = this.route.snapshot.params['id'];
    //if (usuarioService) {
    //  this.buscarLoginPorId(usuarioService);
    //}
  }

  fazerLogin(){
    //console.log(this.usuario);
    //this.usuario.cpf = "12312312312";
    //this.usuario.senha = "123456";
    this.authSevice.fazerLogin(this.usuario);
  }

  public buscarLoginPorId(usuarioLogin) {
    this.loginService.findByCPF(usuarioLogin).subscribe(resposta => {
      this.usuario = resposta;
    });
  }
}
