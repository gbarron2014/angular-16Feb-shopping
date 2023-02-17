import { Component, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() producto!:Product | undefined;

  constructor() {
    this.producto = {
      id:1,
      name:'',
      description:'',
      price:0,
      stock:0
    }
  }
}
