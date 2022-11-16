import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { RentPageComponent } from './rent-page/rent-page.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { PasswordChangeComponent } from './password-change-dialog/password-change.component';
import { PasswordResetFormComponent } from './password-reset-form/password-reset-form.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'rent-page', component: RentPageComponent },
  { path: 'book-detail', component: BookDetailComponent },
  { path: 'password-change-dialog', component: PasswordChangeComponent },
  { path: 'password-reset-form', component: PasswordResetFormComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
