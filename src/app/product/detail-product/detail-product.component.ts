import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../../models/product.d';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit{

  product: Product | undefined;
  isAdmin: boolean = false;

  constructor(
    private productService: ProductService,
    private auth : AuthService,
    private router: ActivatedRoute,
    private route : Router
  ) { }

  ngOnInit() {
    this.isAdmin = this.auth._isAdmin;
    const token: string | null = localStorage.getItem('token');
    const id: string = this.router.snapshot.params['id'];
    if (token) {
      this.productService.getProductById(id, token).subscribe({
        next: (product) => {
          this.product = product;
        },
        error: (error) => {
          alert(error.error.message);
          if (error.error.message === 'Token expired'){
            this.auth.logout();
            this.route.navigate(['/login']);
          }
          else {
            alert('Product not found');
            this.route.navigate(['/products']);
          }
        }
      });
    } else {
      this.auth.logout();
      this.route.navigate(['/login']);
    }
  }

  goBack() {
    this.route.navigate(['/products']);
  }
 toModif() {
    this.route.navigate(['/modif/product', this.product?._id]);
  }
}
