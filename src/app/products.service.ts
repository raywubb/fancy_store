import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Product } from './types';

@Injectable()
export class ProductService {
  products: Product[] = [];
  dataReady = new EventEmitter<string>();

  constructor(private http: HttpClient) {
    http.get('https://fakestoreapi.com/products').subscribe((data) => {
      this.products = data as Product[];
      this.dataReady.emit('ready');
    });
  }

  getProducts() {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    return this.products.find((item) => item.id === id);
  }
}
