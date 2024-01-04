import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';

const authRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
  CommonModule,
  HttpClientModule,
  FormsModule,
  BrowserModule,
  ReactiveFormsModule,
  RouterModule.forChild(authRoutes)
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
