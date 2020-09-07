import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TabelaComponent } from './tabela/tabela.component';
import { EditartabelaComponent } from './editartabela/editartabela.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent},
  {path: 'tabela', component: TabelaComponent},
  {path: 'editartabela', component: EditartabelaComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
