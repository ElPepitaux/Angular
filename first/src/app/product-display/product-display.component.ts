import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent {
 @Input() products! : Product[];
}
