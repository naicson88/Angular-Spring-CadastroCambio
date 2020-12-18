import { Component, OnInit } from '@angular/core';
import { TokenstorageService } from './services/tokenstorage.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  constructor(private tokenStorageService: TokenstorageService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }

     //Verifica que o usuário está logado para acessar os componentes
     var logado = this.tokenStorageService.getToken();
     if (logado == null || logado == '' ){
       this.router.navigate(['/login'])
       }

 
  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login'])
  }

}
