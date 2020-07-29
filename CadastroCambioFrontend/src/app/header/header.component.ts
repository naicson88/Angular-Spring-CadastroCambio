import { Component, OnInit } from '@angular/core';
import { TokenstorageService } from '../tokenstorage.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
    }
  
    logout() {
      this.tokenStorageService.signOut();
      window.location.reload();
      this.router.navigate(['/login'])
    }
  }
