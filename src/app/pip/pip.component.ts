import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';
import { Product } from '../types';

@Component({
  selector: 'app-pip',
  templateUrl: './pip.component.html',
  styleUrls: ['./pip.component.css'],
})
export class PipComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    productService.dataReady.subscribe((value) => {
      this.products = productService.getProducts();
    });
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
