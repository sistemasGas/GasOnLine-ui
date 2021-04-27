import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import { ProdutosPesquisaComponent } from './produtos-pesquisa/produtos-pesquisa.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import {DropdownModule} from 'primeng/dropdown';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { LoginComponent } from './login/login.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { VendaCadastroComponent } from './venda-cadastro/venda-cadastro.component';
import { CompraCadastroComponent } from './compra-cadastro/compra-cadastro.component';
import { ComprasPesquisaComponent } from './compras-pesquisa/compras-pesquisa.component';
import { VendasPesquisaComponent } from './vendas-pesquisa/vendas-pesquisa.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdutosPesquisaComponent,
    ProdutoCadastroComponent,
    CompraCadastroComponent,
    FooterComponent,
    MenuComponent,
    NavbarComponent,
    LoginComponent,
    PessoaCadastroComponent,
    VendaCadastroComponent,
    CompraCadastroComponent,
    ComprasPesquisaComponent,
    VendasPesquisaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    TabMenuModule,
    FormsModule,
    HttpClientModule,
    DropdownModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
