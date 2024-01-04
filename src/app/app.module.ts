import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductModule } from './product/product.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthModule } from './auth/auth.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminModule } from './admin/admin.module';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './_service/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ProfileComponent,
  ],
  imports: [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
    AuthModule,
    AdminModule,
    ProductModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
