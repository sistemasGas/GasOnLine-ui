
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import {MessageService, ConfirmationService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios;
  selectedUsuario;
  edicao = false; 

  val1: string;

  constructor(public usuarioService: UsuarioService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService, 
    private primengConfig: PrimeNGConfig,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.listar();
    const idUsuario = this.route.snapshot.params['id'];   
  }
 // Listar usuarios
  public listar() {
    this.usuarioService.getUsuarios().subscribe(resposta => {
      this.usuarios = resposta;
    })
  }

  public selectUsuario(usuario) {
    this.selectedUsuario = usuario;
  }

  // public deleteUsuario(usuario) {
  //   this.usuarioService.deleteUsuarios(usuario.id).subscribe(r => {
  //     this.listar();
  //   })
  // }

  public deleteUsuario(usuario) {
    this.confirmationService.confirm({message: 'Confirma exclusão?',
    accept: () => {
      this.usuarioService.deleteUsuarios(usuario.id).subscribe(r => {
        this.listar();
        this.messageService.add({severity:'success', summary: 'Excluído com sucesso', detail: ''});
      });
    }})

  }
    
 

  public editar(){
    this.edicao = true;    
  }

  public cancelar(){
    this.edicao =  false;
  }

  public salvar(){
    this.usuarioService.salvarUsuario(this.selectedUsuario).subscribe( r => {
      this.listar();
      this.edicao = false;      
    })
  }

  

}
