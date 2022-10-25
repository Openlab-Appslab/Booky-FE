import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginService: any;

  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit() {
  //   this.loginService.login(this.model)
  // }

}
