import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import {MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './register/register.component';
import { RentPageComponent } from './rent-page/rent-page.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './failed-login-dialog/dialog.component';
import {MatInputModule} from '@angular/material/input';
import { VerifyDialogComponent } from './verify-dialog/verify-dialog.component';
import { PasswordChangeComponent } from './password-change-dialog/password-change.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    RegisterComponent,
    RentPageComponent,
    BookDetailComponent,
    DialogComponent,
    VerifyDialogComponent,
    PasswordChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule, 
    MatToolbarModule, 
    BrowserAnimationsModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatButtonModule, 
    MatDividerModule, 
    MatFormFieldModule, 
    MatCardModule,
    HttpClientModule, 
    FormsModule, 
    RouterModule, 
    MatDialogModule,
    MatInputModule, 
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
