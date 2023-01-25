import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-verify-page',
  templateUrl: './verify-page.component.html',
  styleUrls: ['./verify-page.component.css']
})
export class VerifyPageComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
  ) { 
    this.verifyUserV();
  }

  username:string;
  code:string;

  ngOnInit(): void {
  }
   verifyUserV() {
    this.code =String(this.route.snapshot.paramMap.get('code'));

    this.authService.verifyUser(this.code);
  } 
  
}
