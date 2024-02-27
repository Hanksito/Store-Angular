import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent {
  product = signal<Product | null>(null)
  cover = signal<string>('')
  @Input() id?: string;
  private productService = inject(ProductService)
  private cartService = inject(CartService)

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    const product = this.product()
    if (product) {
      this.cartService.addToCart(product)
    }
  }
  changeCover(newImg: string) {
    this.cover.set(newImg)
  } 



  ngOnInit() {
    if (this.id) {
      this.productService.getOne(this.id).subscribe({
        next: (product) => {
          this.product.set(product)
          if (product.images.length > 0) {
            this.cover.set(product.images[0])

          }
        }
      })
    }
  }
}
