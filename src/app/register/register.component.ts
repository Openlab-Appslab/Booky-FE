import { Component, OnInit } from '@angular/core';
import { user } from 'src/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = '';
  password: string = ''; 
  email: any = '';
  confirmPassword: any ;

  users: user[] = [];

  model = new user( '', '','' );
  
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
