import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../../models/product.d';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-product-user',
  templateUrl: './product-user.component.html',
  styleUrls: ['./product-user.component.css']
})
export class ProductUserComponent implements OnInit{

  Products: any = [];
  isAdmin: boolean = false;


  constructor(
    private productService: ProductService,
    private auth : AuthService,
    private router: ActivatedRoute,
    private route : Router) { }

  ngOnInit(){
    this.isAdmin = this.auth._isAdmin;
    const token: string | null = localStorage.getItem('token');
    const id: string = this.router.snapshot.params['id'];
    if (token) {
      this.productService.getProductByUserId(id, token).subscribe({
        next: (products) => {
          this.Products = products.products;
          console.log(this.Products);
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
    this.route.navigate(['/me']);
  }
 toModif(produit: Product) {
    this.route.navigate(['/modif/product', produit?._id]);
  }
}

