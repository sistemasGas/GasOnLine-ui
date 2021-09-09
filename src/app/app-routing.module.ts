import { DistribuidoraComponent } from './distribuidora/distribuidora.component';
import { AuthGuard } from './guards/auth.guards';
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
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CadastroComponent } from './distribuidora/cadastro/cadastro.component';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "home", component: DashboardComponent, canActivate: [AuthGuard]},
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
  { path: "produto/cadastro", component: ProdutoCadastroComponent, canActivate: [AuthGuard]},
  { path: "produtos/pesquisa", component: ProdutosPesquisaComponent, canActivate: [AuthGuard]},
  { path: "produto/cadastro/:id", component: ProdutoCadastroComponent, canActivate: [AuthGuard]},
  { path: "pessoa/cadastro", component: PessoaCadastroComponent, canActivate: [AuthGuard]},
  { path: "compra/cadastro", component: CompraCadastroComponent, canActivate: [AuthGuard]},
  { path: "venda/cadastro", component: VendaCadastroComponent, canActivate: [AuthGuard]},
  { path: "venda/cadastro/:id", component: VendaCadastroComponent, canActivate: [AuthGuard]},
  { path: "vendas/pesquisa", component: VendasPesquisaComponent, canActivate: [AuthGuard]},
  { path: "usuario", component: UsuarioComponent, canActivate: [AuthGuard]},
  { path: "usuario/create", component: CreateComponent, canActivate: [AuthGuard]},
  { path: "usuario/create/:id", component: CreateComponent, canActivate: [AuthGuard]},
  { path: "usuario/usuario-login", component: UsuarioLoginComponent, canActivate: [AuthGuard]},
  { path: "login", component: LoginComponent},
  { path: "pagina-nao-encontrada", component: PaginaNaoEncontradaComponent, canActivate: [AuthGuard]},
  { path: "distribuidora", component: DistribuidoraComponent, canActivate: [AuthGuard]},
  { path: "distribuidora/cadastro", component: CadastroComponent, canActivate: [AuthGuard]},
  { path: "**", redirectTo: 'pagina-nao-encontrada'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
