import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../products.service';
import { Product } from '../types';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.css'],
})
export class PdpComponent implements OnInit {
  id: number = 0;
  product: Product | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = this.productService.getProduct(this.id);
    });
  }
}
