import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TabelaComponent } from './tabela/tabela.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { EditartabelaComponent } from './editartabela/editartabela.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CreditoComponent } from './credito/credito.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TabelaComponent,
    CadastroComponent,
    EditartabelaComponent,
    CreditoComponent
   
      
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CurrencyMaskModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule .forRoot() // ToastrModule added
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
