import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-modif-product',
  templateUrl: './modif-product.component.html',
  styleUrls: ['./modif-product.component.css']
})
export class ModifProductComponent {

  product: Product = {} as Product;
  token: string = localStorage.getItem('token') || '';
  updatedProduct: Product = {} as Product;

    constructor(private productService: ProductService,
      private authService: AuthService,
      private router: ActivatedRoute,
      private route: Router) { }

    ngOnInit() {

      const id = this.router.snapshot.params['id'];
      this.updatedProduct['_id'] = id;
      this.productService.getProductById(id,this.token).subscribe({
        next: (data: any) => {
          this.product = data;
          console.log(this.product);
        },
        error: (error: any) => {
          alert(error.error.message);
        }
      });
    }

    save(): void {
      console.log(this.updatedProduct);
      console.log(this.updatedProduct['_id']);
      this.productService.updateProduct(this.updatedProduct,this.token).subscribe({
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
    deleteProduct() {
      const id: string = this.router.snapshot.params['id'];
      this.updatedProduct._id = id;
      this.productService.deleteProduct(this.updatedProduct['_id'], this.token).subscribe({
        next: (data: any) => {
          console.log(data);
        },
        error: (error: any) => {
          alert(error.error.message);
        }
      });
    }



}
