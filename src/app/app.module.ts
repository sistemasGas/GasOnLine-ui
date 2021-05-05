import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StepsModule} from 'primeng/steps';
import {ListboxModule} from 'primeng/listbox';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {MessagesModule} from 'primeng/messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
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
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreComponent } from './core/core.component';
import {PickListModule} from 'primeng/picklist';



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
    DashboardComponent,
    CoreComponent

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
    CurrencyMaskModule,
    TableModule,
    StepsModule,
    ListboxModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    MessagesModule,
    PickListModule
  ],
  providers: [
    ConfirmationService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class Categoria {
  descricao: String;
  codigo: Number;
  sigla: String
}
