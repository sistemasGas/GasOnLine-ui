import { LoginService } from './../login.service';

import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import {MessageService, ConfirmationService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { ErrorHandlerService } from '../core/error-handler.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  [x: string]: any;

  usuarios;
  selectedUsuario;
  login;
  edicao = false;

  val1: string;

  constructor(public usuarioService: UsuarioService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.listar();

    const idUsuario = this.route.snapshot.params['id'];
  }
 // Listar usuarios
  public listar() {

    this.usuarioService.getUsuarios().then(resposta => {
      this.usuarios = resposta;
    })
    .catch(erro => this.errorHandler.handler(erro));
  }


  public listarLogin() {
    this.LoginService.getLogin().subscribe(resposta => {
      this.login = resposta;
    })
  }

  public selectUsuario(usuario) {
    this.selectedUsuario = usuario;
  }

  public deleteUsuario(usuario) {
    this.confirmationService.confirm({message: 'Confirma exclusão?',
    accept: () => {
      this.usuarioService.deleteUsuarios(usuario.id).then(r => {
        this.listar();
        this.messageService.add({severity:'success', summary: 'Excluído com sucesso', detail: ''});
      })
      .catch(erro => this.errorHandler.handler(erro));
    }})
  }

  public editar(){
    this.edicao = true;
  }

  public cancelar(){
    this.edicao =  false;
  }

  public salvar(){
    this.usuarioService.salvarUsuario(this.selectedUsuario).then( r => {
      this.listar();
      this.edicao = false;
    })
    .catch(erro => this.errorHandler.handler(erro));
  }
}
