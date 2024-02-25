import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input({ required: true }) cart: Product[] = [];
  hideSideMenu = signal(true)
  total = signal(0)

  toggleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState)
  }

  ngOnChanges(changes: SimpleChanges) {
    const cart = changes['cart'];
    if (cart) {
      this.total.set(this.calcTotal())
    }
  }

  calcTotal() {
    return this.cart.reduce((total, product) => total + product.price, 0)
  }
}
