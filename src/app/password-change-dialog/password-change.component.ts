import { Component, OnInit } from '@angular/core';
import { sentMail } from 'src/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) { }

  email: string = '';

  send : boolean = false

  model = new sentMail('');

  ngOnInit(): void {}

  onSubmit() {
    this.authService.sendPasswordResetEmail(this.model.email);
    console.log(this.model.email);
    this.send = true;
  }

}
