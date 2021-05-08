import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios;
  selectedUsuario;
  edicao = false;

  constructor(public usuarioService: UsuarioService) { }


  ngOnInit() {
    this.listar();
  }

  public listar() {
    this.usuarioService.getUsuarios().subscribe(resposta => {
      this.usuarios = resposta;
    })
  }

  public selectUsuario(usuario) {
    this.selectedUsuario = usuario;
  }

  public deleteUsuario(usuario) {
    this.usuarioService.deleteUsuarios(usuario.id).subscribe(r => {
      this.listar();
    })
  }

  public editar(){
    this.edicao = false;
  }

  public cancelar(){
    this.edicao =  false;
  }

  public salvar(){
    this.usuarioService.salvarUsuario(this.selectedUsuario).subscribe( r => {
      this.listar();
    })
  }

}
