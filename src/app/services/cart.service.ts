import { EventEmitter, Injectable } from '@angular/core';
import { ProductService } from './product.service';

interface CartItem {
  productId: number;
  count: number;
}

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

  getItems() {
    return this.items;
  }
}
