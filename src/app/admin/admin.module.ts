import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminGuard } from './admin.guard';
import { AdminService } from './admin.service';
import { LoaderComponenttt } from './loader/loader.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { ModifProductComponent } from './modif-product/modif-product.component';

const adminRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard] },
  { path: 'user/:id', component: DetailUserComponent, canActivate: [AdminGuard] },
  { path: 'modif/product/:id', component: ModifProductComponent, canActivate: [AdminGuard] }
];

@NgModule({
  declarations: [
    DashboardComponent,
    LoaderComponenttt,
    DetailUserComponent,
    ModifProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forChild(adminRoutes)
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
