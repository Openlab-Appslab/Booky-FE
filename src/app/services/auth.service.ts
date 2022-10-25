// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { user, userLogin, userScore } from '../user';
// import { CookieService } from 'ngx-cookie-service';
// import {MatDialog} from '@angular/material/dialog';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   headers = new Headers();
//   authString: string;
//   //userSubject = new Subject<void>();
//   users : user[] = [];
//   //usersScore : userScore[] = [];
//   //skill: number;
//   userName: string;

//   constructor(
//     private readonly httpClient: HttpClient,
//     //private cookies: CookieService,
//     private dialog : MatDialog, 
//   ) { }

//   getToken(): string {
//     const authString = `${this.cookies.get('username')}:${this.cookies.get('password')}`
//     return 'Basic ' + btoa(authString);
//   }

//   isLoggedIn(): boolean {
//     return !!(this.cookies.get('username') && this.cookies.get('password'));
//   }

//   async login(user: userLogin){

//     let authString = `${user.username}:${user.password}`

//     this.headers.set('Authorization', 'Basic ' + btoa(authString))

//     try {
//       const response = await fetch('http://localhost:8080/users', {
//         method: 'GET',
//         headers: this.headers,
//       });
//       const data_1 = await response.json();
//       this.cookies.set('username', user.username);
//       this.cookies.set('password', user.password );
//       window.location.href="/home" 

//     }
//      catch (error) {
//       console.log('Error:', error);
//       //this.showFailDialog();
//     }
//   }

  

// }