import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-verify-page',
  templateUrl: './verify-page.component.html',
  styleUrls: ['./verify-page.component.css']
})
export class VerifyPageComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) { 
    this.verifyUserV();
  }

  username:string;
  code:string;

  ngOnInit(): void {
  }
   verifyUserV() {
    this.authService.verifyUser(this.username, this.code);
    //console.log(this.username);
    
  } 
}
