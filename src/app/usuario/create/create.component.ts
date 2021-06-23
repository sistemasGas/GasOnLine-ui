import { UsuarioLoginComponent } from './../usuario-login/usuario-login.component';
import { LoginService } from './../../login.service';
import { Endereco, Login } from './../../core/model';
import { UsuarioService } from './../../usuario.service';
import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig, ConfirmationService } from 'primeng/api';
import { Pessoa } from 'src/app/core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { utils } from 'protractor';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { EnderecoService } from 'src/app/endereco.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  exibindoCNPJ = false;
  exibindoCPF = true;
  exibindoCargo = false;
  exibindoCategoria = true;
  exibirEndereco = false;
  exibindoLogin = false;
  exibindoSenha = false;
  exibindoPerfil = false;

  endereco = new Endereco();
  usuario = new Pessoa();
  user = new Login();

  formResult: string = '';
  public MASKS = MASKS;

  cargos = [
    { label: "Administrador", value: "Administrador" },
    { label: "Vendedor", value: "Vendedor" }
  ]
  categorias = [
    { label: "Cliente", value: "CLIENT" },
    { label: "Fornecedor", value: "FORN" },
    { label: "Cliente/Fornecedor", value: "CLIFOR" },
    { label: "Funcionário", value: "FUNC" }
  ]
  perfis = [
    { label: "Admin", value: "Admin" },
    { label: "Atendente", value: "Func" }
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
    private router: Router,
    private enderecoService: EnderecoService,
    private errorHandler: ErrorHandlerService
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
    this.usuario.endereco = this.endereco;
    console.log(this.usuario);
    this.usuarioService.salvarUsuario(this.usuario).then(resposta => {
      if (this.usuario.id) {
        this.messageService.add({ severity: 'success', summary: 'Usuário Atualizado!', detail: '' });

      }
      else {
        this.messageService.add({ severity: 'success', summary: 'Usuário Cadastrado!', detail: '' });
      }
      this.usuario = new Pessoa();
      // location.reload;
    })
      .catch(erro => this.errorHandler.handler(erro));
    this.router.navigate(['/usuario']);
  }

  readById(idPessoa) {
    this.usuarioService.readById(idPessoa).subscribe(resposta => {
      this.usuario = resposta;
    });
  }

  onChange(change: any) {
    this.usuario.tipo = change.value;
    if (change.value === 'FISICA') {
      this.exibindoCPF = true;
      this.exibindoCNPJ = false;
      this.exibindoCargo = true;
      this.categorias = [
        // { label: "Cliente | Fornecedor", value: "CLIFOR" },
        { label: "Cliente", value: "CLIENT" },
        // { label: "Fornecedor", value: "FORN" },
        { label: "Funcionário", value: "FUNC" }
      ]
      this.exibindoLogin = true;
      this.exibindoSenha = true;
      this.exibindoPerfil = true;
    }

       

    if (change.value === 'JURIDICA') {
      this.exibindoCNPJ = true;
      this.exibindoCPF = false;
      this.exibindoCargo = false;
      this.exibindoLogin = false;
      this.exibindoSenha = false;
      this.exibindoPerfil = false;
      this.categorias = [
        { label: "Cliente | Fornecedor", value: "CLIFOR" },
        { label: "Cliente", value: "CLIENT" },
        { label: "Fornecedor", value: "FORN" },
        // { label: "Funcionário", value: "FUNC" }
      ]
      // this.categorias.splice(3, 3);
    }
  }

  adicionarEndereco() {
    this.usuario.endereco = this.endereco;
    this.fecharTelaEndereco();
    console.log(this.usuario.endereco)
  }

  chamarTelaEndereco() {
    this.exibirEndereco = true;
  }

  fecharTelaEndereco() {
    this.exibirEndereco = false;
  }

  public buscarEnderecoPorCep(cep) {
    this.enderecoService.getEndereco(cep).then(resposta => {
      this.endereco.cep = resposta.cep
      this.endereco.logradouro = resposta.logradouro
      this.endereco.bairro = resposta.bairro
      this.endereco.localidade = resposta.localidade
      this.endereco.uf = resposta.uf
    })
      .catch(erro => this.errorHandler.handler(erro));
  }
}
