import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { RentPageComponent } from './rent-page/rent-page.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { PasswordChangeComponent } from './password-change-dialog/password-change.component';
import { PasswordResetFormComponent } from './password-reset-form/password-reset-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VerifyPageComponent } from './verify-page/verify-page.component';
import { AuthGuard } from './shared/auth.guard';


const routes: Routes = [
  
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home-page', component: HomePageComponent, canActivate:[AuthGuard],},
  { path: 'register', component: RegisterComponent },
  { path: 'rent-page', component: RentPageComponent, canActivate:[AuthGuard],},
  { path: 'book-detail', component: BookDetailComponent, canActivate:[AuthGuard],},
  { path: 'password-change-dialog', component: PasswordChangeComponent },
  { path: 'changePassword/:email', component: PasswordResetFormComponent },
  { path: 'user-profile', component: UserProfileComponent, canActivate:[AuthGuard],},
  { path: 'verify/:code', component: VerifyPageComponent },
  { path: 'books', component: HomePageComponent, canActivate:[AuthGuard]},
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]})
export class AppRoutingModule { }