import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  getItems() {
    return this.cartService.getItems();
  }

  get totalCount() {
    return this.cartService.getTotalCount();
  }

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }
}
