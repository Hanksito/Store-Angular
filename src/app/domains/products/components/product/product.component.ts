import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({ required: true }) img: string = '';
  @Input() price: number = 0;
  @Input() title: string = '';
  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    this.addToCart.emit('hola este es un msg desde el hijo ' + this.title);
  }

}
