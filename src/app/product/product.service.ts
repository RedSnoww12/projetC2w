import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`);
  }

  getProductById(id: string, token: string): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrl}/product/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  createProduct(product: Product, token: string) {
    return this.http.post(`${environment.apiUrl}/product/create`, product, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  updateProduct(product: Product, token: string) {
    console.log(product['_id']);
    return this.http.put(`${environment.apiUrl}/product/${product._id}`, product, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  deleteProduct(id: string, token: string) {
    return this.http.delete(`${environment.apiUrl}/product/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  getProductByUserId(id: string, token: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

}
