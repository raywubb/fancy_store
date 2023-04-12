import { Component } from '@angular/core';
import axios from 'axios';

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
  selector: 'app-pip',
  templateUrl: './pip.component.html',
  styleUrls: ['./pip.component.css'],
})
export class PipComponent {
  products: Product[] = [];

  constructor() {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        console.log('.. L14', response);
        this.products = response.data;
      })
      .catch((error) => console.error(error));
  }
}
