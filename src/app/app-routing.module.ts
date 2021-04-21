import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import {ProdutosPesquisaComponent } from './produtos-pesquisa/produtos-pesquisa.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "ProdutoPesquisaComponente" },
  //{path: "home", component: HomeComponent},
  { path: "produto-cadastro", component: ProdutoCadastroComponent },
  { path: "produtos-pesquisa", component: ProdutosPesquisaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
