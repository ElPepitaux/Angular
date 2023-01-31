import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-composant',
  templateUrl: './composant.component.html',
  styleUrls: ['./composant.component.css']
})
export class ComposantComponent {
  products: Product[] = [{name: "Chaise", price: 10, stock: 4}, {name: "table", price: 100, stock: 1}, {name: "yacht", stock: 0, price: 1}];
  decrementStock = decrementStock;
}

function decrementStock(x: number) {
  x = x - 1;
  return x
}

