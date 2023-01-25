import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private cookies : CookieService,
  ) { }

  loggedInUsername: string;

  ngOnInit(): void {

    this.loggedInUsername = this.cookies.get('username');
  }

}
