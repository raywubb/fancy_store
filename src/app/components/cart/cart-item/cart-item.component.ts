import { Component, Input } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { ProductService } from '../../../services/product.service';
import { CartItem } from '../../../types';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() item!: CartItem;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  get product() {
    return this.productService.getProduct(this.item.productId);
  }

  increase() {
    this.cartService.addToCart(this.item.productId);
  }

  decrease() {
    this.cartService.decFromCart(this.item.productId);
  }
}
