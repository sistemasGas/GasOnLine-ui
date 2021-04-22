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


@NgModule({
  declarations: [
    AppComponent,
    ProdutosPesquisaComponent,
    ProdutoCadastroComponent,
    FooterComponent,
    MenuComponent,
    NavbarComponent
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
