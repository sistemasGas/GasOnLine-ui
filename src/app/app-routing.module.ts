import { DashboardComponent } from './dashboard/dashboard.component';
import { VendaCadastroComponent } from './venda-cadastro/venda-cadastro.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ProdutosPesquisaComponent } from './produtos-pesquisa/produtos-pesquisa.component';
import { CompraCadastroComponent } from './compra-cadastro/compra-cadastro.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "dashboard" },
  { path: "", component: DashboardComponent},
  { path: "produto/cadastro", component: ProdutoCadastroComponent },
  { path: "produtos/pesquisa", component: ProdutosPesquisaComponent },
  { path: "compra/cadastro", component: CompraCadastroComponent},
  { path: "venda/cadastro", component: VendaCadastroComponent},
  { path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
