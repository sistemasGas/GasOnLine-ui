import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ProdutosPesquisaComponent } from './produtos-pesquisa/produtos-pesquisa.component';
import { CompraCadastroComponent } from './compra-cadastro/compra-cadastro.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "ProdutoPesquisaComponente" },
  //{path: "home", component: HomeComponent},
  { path: "produto/cadastro", component: ProdutoCadastroComponent },
  { path: "produtos/pesquisa", component: ProdutosPesquisaComponent },
  { path: "compra/cadastro", component: CompraCadastroComponent},
  { path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
