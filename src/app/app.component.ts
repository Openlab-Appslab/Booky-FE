import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { user } from 'src/user';
import { threadId } from 'worker_threads';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private readonly loginService: AuthService,
    private cookies: CookieService,
  ){}

  users: user[] = [];

  loggedInUsername: string;
  loggedInRole: string;

  ngOnInit(): void {
    this.loggedInUsername = this.cookies.get('username');
    this.loggedInRole = this.cookies.get('role');
  }

  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  onlogout() { 
    this.loginService.logout();
    location.reload();
  }
}

