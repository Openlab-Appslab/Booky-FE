import { Component, OnInit } from '@angular/core';
import { loggedUser, user } from 'src/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: user[] = [];

  model = new loggedUser( '', '');

  constructor(
    private readonly loginService: AuthService,
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    this.loginService.login(this.model)
    console.log(this.model);
    
  }

}
