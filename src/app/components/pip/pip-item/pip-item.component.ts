import { Component, Input } from '@angular/core';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

@Component({
  selector: 'app-pip-item',
  templateUrl: './pip-item.component.html',
  styleUrls: ['./pip-item.component.css'],
})
export class PipItemComponent {
  @Input() product!: Product;

  getRate() {
    const value = Math.round(this.product?.rating?.rate ?? 0);
    return new Array(value);
  }
}
