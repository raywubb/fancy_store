import { Component } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'store_demo';
  cartItemCnt: number = 0;

  constructor(private cartService: CartService) {
    cartService.cartUpdated.subscribe((action) => {
      this.cartItemCnt = cartService.getTotalCount();
    });
  }
}
