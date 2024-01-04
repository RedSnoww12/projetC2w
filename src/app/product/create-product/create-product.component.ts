import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Product } from 'src/app/models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  product: Product = {} as Product;

  constructor(private authService: AuthService,
    private productService: ProductService,
    private route: Router) { }

  ngOnInit() {

  }

  save(): void {
    const token: string = localStorage.getItem('token') || '';

    this.productService.createProduct(this.product, token).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error: any) => {
        alert(error.error.message);
      }
    });
  }

  goBack() {
    this.route.navigate(['/products']);
  }

}
