import { EventEmitter } from '@angular/core';
import axios from 'axios';
import { Product } from './types';

export class ProductService {
  products: Product[] = [];
  dataReady = new EventEmitter<string>();

  constructor() {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        this.products = response.data;
        console.log('.. L14', this.products);
        this.dataReady.emit('ready');
      })
      .catch((error) => console.error(error));
  }

  getProducts() {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    return this.products.find((item) => item.id === id);
  }
}
