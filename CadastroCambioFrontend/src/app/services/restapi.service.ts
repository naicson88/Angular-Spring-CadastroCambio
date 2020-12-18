import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Usuario } from '../classes/usuario';
import { Router } from '@angular/router';
import { TokenstorageService } from './tokenstorage.service';


const AUTH_API = 'http://localhost:8080/api/auth/';


const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json' 
    })
};

@Injectable({
  providedIn: 'root'
})

export class RestapiService {

  constructor(private http: HttpClient, private tokenstorage: TokenstorageService) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }
  
  
} 
  /*
// Provide username and password for authentication, and once authentication is successful, 
//store JWT token in session
  authenticate(username, password) {
    return this.httpClient
      .post<any>("http://localhost:8080/authenticate", { username, password })
      .pipe(
        map(userData => {
          sessionStorage.setItem("username", username);
          let tokenStr = "Bearer " + userData.token;
          sessionStorage.setItem("token", tokenStr);
          return userData;
        })
      );
  } 

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
  }*/


/* login(usuarioDetail: Usuario) : Observable <any>
 {
   let url = this.baseUrl+"login";
   return this.http.post(url, usuarioDetail)
 }*/





/*const Url = 'http://localhost:8080/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RestapiService {

 USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username: String;
  public password: String;

  constructor(private http: HttpClient) { }

  authenticationService(username: String, password: String) {
    return this.http.get(`http://localhost:8080/login`,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
      }));
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }


  login(credentials): Observable<any> {
    return this.http.post(Url + 'login', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  /*public login(username:string, password:string){
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username +":"+password)})
   return this.http.get(this.Url, {headers,responseType:'text' as 'json'})
  
*/
