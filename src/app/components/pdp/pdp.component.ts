import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../types';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.css'],
})
export class PdpComponent implements OnInit {
  id: number = 0;
  product!: Product;
  inCart: boolean = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {
    productService.dataReady.subscribe((value) => {
      this.product = this.productService.getProduct(this.id);
    });
    cartService.cartUpdated.subscribe((action) => {
      this.inCart = cartService.containsProduct(this.id);
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = this.productService.getProduct(this.id);
      this.inCart = this.cartService.containsProduct(this.id);
    });
  }

  getRate() {
    const value = Math.round(this.product.rating.rate);
    return new Array(value);
  }

  addToCart() {
    this.cartService.addToCart(this.product.id);
  }
}
