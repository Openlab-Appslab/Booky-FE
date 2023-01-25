import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user, userLogin } from 'src/user';
import { CookieService } from 'ngx-cookie-service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../failed-login-dialog/dialog.component';
import { RegisterVerifyDialogComponent } from '../register-verify-dialog/register-verify-dialog.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  headers = new Headers();
  authString: string;
  users : user[] = [];
  username!: string;

  constructor(
    private readonly httpClient: HttpClient,
    private cookies: CookieService,
    private dialog : MatDialog, 
    private router: Router, 
  ) { }

      getToken(): string {
        const authString = `${this.cookies.get('username')}:${this.cookies.get('password')}`
        return 'Basic ' + btoa(authString);
      }

    //   isLoggedIn(): boolean {
    //     return !!(this.cookies.get('username') && this.cookies.get('password'));
    //   }

    async login(user: userLogin) {
      let authString = `${user.username}:${user.password}`
  
      this.headers.set('Authorization', 'Basic ' + btoa(authString))
      console.log(authString);
  
      try {
        const response = await fetch('http://localhost:8080/login', {
          method: 'GET',
          headers: this.headers,
        });
        const data_1 = await response.json();
  
        setTimeout(() => {
          this.router.navigateByUrl("/home-page").then(() => {
            location.reload();
          });
        }, 900);
  
        this.cookies.set('password', user.password);
        this.cookies.set('username', user.username );
  
      }
      catch (error) {
        console.log('Error:', error);
        this.showFailDialog();
      }
    }

      createUser (user:user) {
        fetch('http://localhost:8080/register', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(user),
       })
       .then(() => {
         console.log('Success!');
         //window.location.href="/login" 
         this.showRegisterVerifyialog();
       })
       .catch((error) => {
         console.error('Error:' , error);
         alert("faileeedddd")
      });
   
     }
   
     logout() : void { 
       this.cookies.delete ('username');
       this.cookies.delete('password');
       this.cookies.delete('role');
       //this.userSubject.next();
       location.reload();
     }

     changePassword( email:string, password : string){

      fetch('http://localhost:8080/changePassword/'+ email + "/" + password, {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': "application/json; charset=utf8",
      }),
    })
    .then(() => {
      console.log('passw reset Success!');
      //window.location.href="/login"
    })
    .catch((error) => {
      console.error('Error:' , error);
      alert("faileeedddd")
    });

  }

      showFailDialog(): void {
        this.dialog.open(DialogComponent);
      }

      showRegisterVerifyialog(): void {
        this.dialog.open(RegisterVerifyDialogComponent);
      }

      sendPasswordResetEmail(email: string) {

        fetch('http://localhost:8080/changePasswordEmail/' + email, {
          method: 'GET',
          headers: new Headers({
            'Content-Type': "application/json; charset=utf8",
        }),
      })
      .then(() => {
        console.log('Success!');
        //this.showPasswordDialog();
      })
      .catch((error) => {
        console.error('Error:' , error);
        alert("faileeedddd")
      });
  
    }
  
    verifyUser(code: string) {

      fetch('http://localhost:8080/verify/' + code , {
        method: 'GET',
        headers: new Headers({
          'Content-Type': "application/json; charset=utf8",
      }),
    })
    .then(() => {
      console.log('verify Success!');
    })
    .catch((error) => {
      console.error('Error:' , error);
      alert("faileeedddd")
    });

  }

}