import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { resendMail } from 'src/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  constructor(
    private loginService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  send: boolean = false;
  model = new resendMail( '');

  onSubmit() {
    //this.loginService.resendMail(this.model.email);
    console.log(this.model);
  }

  sendButton(){
    this.send = true;
  }
}
