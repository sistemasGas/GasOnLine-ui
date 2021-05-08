import { UsuarioService } from './../../usuario.service';
import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  usuario: { id, nome, telefone, email, cpf, endereco, categoria, cargo } =
    { id: null, nome: "", telefone: "", email: "", cpf: "", endereco: "", categoria: "", cargo: "" };

    cargos = [
      { label: "Administrador", value: "Administrador" },
      { label: "Funcionario", value: "Funcionario" }
    ]
    
  constructor(public usuarioService: UsuarioService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
  }

  createUsuario() {
    console.log(this.usuario);
    this.usuarioService.salvarUsuario(this.usuario).subscribe(resposta => {
      this.messageService.add({ severity: 'success', summary: 'Usuario Cadastrado', detail: '' });
      this.usuario = { id: null, nome: "", telefone: "", email: "", cpf: "", endereco: "", categoria: "", cargo: "" };
    });
  }

}
