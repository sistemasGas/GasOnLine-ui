import { UsuarioLoginComponent } from './../usuario-login/usuario-login.component';
import { LoginService } from './../../login.service';
import { Endereco, Login} from './../../core/model';
import { UsuarioService } from './../../usuario.service';
import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig, ConfirmationService } from 'primeng/api';
import { Pessoa } from 'src/app/core/model';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { utils } from 'protractor';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  exibindoCNPJ = false;
  exibindoCPF = true;
  usuario = new Pessoa();
  user = new Login();
  endereco: Endereco;


// ↓ em teste
formResult: string = '';
public MASKS = MASKS;


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
   cadastroForm: FormGroup;
   fb: any;

  constructor(public usuarioService: UsuarioService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
    private route: ActivatedRoute,
    // private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    const idPessoa = this.route.snapshot.params['id'];
    this.readById(idPessoa);

    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]]
    });


  }

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

  onChange(change:any){
    if(change.value === 'FISICA'){
      this.exibindoCPF=true;
      this.exibindoCNPJ=false;
    }
    if(change.value === 'JURIDICA'){
      this.exibindoCNPJ=true;
      this.exibindoCPF=false;
    }
  }
}
