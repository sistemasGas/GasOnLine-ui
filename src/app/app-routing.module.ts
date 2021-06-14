import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { VendasPesquisaComponent } from './vendas-pesquisa/vendas-pesquisa.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendaCadastroComponent } from './venda-cadastro/venda-cadastro.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ProdutosPesquisaComponent } from './produtos-pesquisa/produtos-pesquisa.component';
import { CompraCadastroComponent } from './compra-cadastro/compra-cadastro.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioLoginComponent } from './usuario/usuario-login/usuario-login.component';
import { CreateComponent } from './usuario/create/create.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { AuthGuard } from './account/account.guard';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "dashboard" },
  { path: "", component: DashboardComponent},
  { path: "home", component: DashboardComponent},
  { path: "produto/cadastro", component: ProdutoCadastroComponent },
  { path: "produtos/pesquisa", component: ProdutosPesquisaComponent },
  { path: "produto/cadastro/:id", component: ProdutoCadastroComponent },
  { path: "pessoa/cadastro", component: PessoaCadastroComponent},
  { path: "compra/cadastro", component: CompraCadastroComponent},
  { path: "venda/cadastro", component: VendaCadastroComponent},
  { path: "venda/pesquisa", component: VendasPesquisaComponent},
  { path: "usuario", component: UsuarioComponent},
  { path: "usuario/create", component: CreateComponent},
  { path: "usuario/create/:id", component: CreateComponent},
  { path: "usuario/usuario-login", component: UsuarioLoginComponent},
  { path: "login", component: LoginComponent},
  {path: '', component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent},
      { path: 'usuario/usuario-login', component: UsuarioLoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
