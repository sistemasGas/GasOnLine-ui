import { HttpClient, HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StepsModule } from 'primeng/steps';
import { ListboxModule } from 'primeng/listbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { ProdutosPesquisaComponent } from './produtos-pesquisa/produtos-pesquisa.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DropdownModule } from 'primeng/dropdown';
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
import { OrderListModule } from 'primeng/orderlist';
import {InputNumberModule} from 'primeng/inputnumber';
import { UsuarioComponent } from './usuario/usuario.component';
import { CreateComponent } from './usuario/create/create.component';
import { InputMaskModule } from 'primeng/inputmask';
import { UsuarioLoginComponent } from './usuario/usuario-login/usuario-login.component';
import { DragDropModule } from 'primeng/dragdrop';
import { CalendarModule } from 'primeng/calendar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { NgBrazil } from 'ng-brazil'
import { TextMaskModule } from 'angular2-text-mask';
import { PasswordModule } from 'primeng/password';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AuthService } from './login/auth.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AuthGuard } from './guards/auth.guards';
import { ErrorHandlerService } from './core/error-handler.service';
import { LoginService2 } from './login/login.service2';
import { AuthInterceptor } from './http.interceptor';

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
    CoreComponent,
    UsuarioComponent,
    CreateComponent,
    UsuarioLoginComponent,

    PaginaNaoEncontradaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    TabMenuModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropdownModule,
    CurrencyMaskModule,
    TableModule,
    StepsModule,
    ListboxModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    MessagesModule,
    OrderListModule,
    ToastModule,
    CardModule,
    InputMaskModule,
    DialogModule,
    DragDropModule,
    CalendarModule,
    SplitButtonModule,
    FileUploadModule,
    TextMaskModule,
    NgBrazil,
    SelectButtonModule,
    PasswordModule,
    InputNumberModule,
    AppRoutingModule
  ],
  providers: [LoginService2, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true},
    AuthService,
    AuthGuard,
    ConfirmationService,
    MessageService,
    ErrorHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
