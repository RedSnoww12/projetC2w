import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent  implements OnInit{

  lstProduct: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.lstProduct = data;
    });
  }

  goToDetail(product: Product) {
    this.router.navigate(['/product', product._id]);
  }
  goCreate() {
    this.router.navigate(['/create']);
  }

}
