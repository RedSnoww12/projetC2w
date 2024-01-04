import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { BorderCardDirective } from './border-card.directive';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { LoaderComponent } from './loader/loader.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductUserComponent } from './product-user/product-user.component';

const productRoutes: Routes = [
  { path: 'products', component: ListProductComponent },
  { path: 'product/:id', component: DetailProductComponent },
  { path: 'create', component: CreateProductComponent}
  
];

@NgModule({
  declarations: [
    ListProductComponent,
    LoaderComponent,
    BorderCardDirective,
    DetailProductComponent,
    CreateProductComponent,
    ProductUserComponent
  ],
  imports: [
  CommonModule,
  FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(productRoutes)
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
