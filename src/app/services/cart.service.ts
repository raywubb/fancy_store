import { EventEmitter, Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { CartItem } from '../types';

@Injectable()
export class CartService {
  items: CartItem[] = [];
  cartUpdated = new EventEmitter<string>();

  constructor(private productService: ProductService) {}

  addToCart(productId: number) {
    const item = this.items.find(
      (cartItem) => cartItem.productId === productId
    );
    if (item) {
      item.count++;
    } else {
      this.items.push({ productId, count: 1 });
    }

    this.cartUpdated.emit('add');
  }

  decFromCart(productId: number) {
    const item = this.items.find(
      (cartItem) => cartItem.productId === productId
    );
    if (item) {
      item.count--;
      if (item.count <= 0) {
        this.items = this.items.filter((item) => item.productId !== productId);
      }
    }

    this.cartUpdated.emit('remove');
  }

  containsProduct(productId: number) {
    const item = this.items.find(
      (cartItem) => cartItem.productId === productId
    );
    return !!item;
  }

  getTotalCount() {
    return this.items
      .map((item) => item.count)
      .reduce((acc, cnt) => acc + cnt, 0);
  }

  getTotalPrice() {
    const price = this.items
      .map(
        (item) =>
          item.count * this.productService.getProduct(item.productId).price
      )
      .reduce((acc, v) => acc + v, 0);
    return price.toFixed(2);
  }

  getItems() {
    return this.items;
  }
}
