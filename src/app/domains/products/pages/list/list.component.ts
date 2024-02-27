

import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { Category, Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { RouterLinkWithHref } from '@angular/router';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {
  @Input() category_id?: string 
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService)
  private productService = inject(ProductService)
  private categoryService = inject(CategoryService)
  ngOnChanges(changes: SimpleChanges) {
    this.getProducts()
  }

  ngOnInit() {

    this.getCategories()
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }
  private getProducts() {
    this.productService.getProducts(this.category_id).subscribe({
      next: (products) => {
        this.products.set(products)
      },
      error: () => {

      }
    }
    )
  }

  private getCategories() {
    this.categoryService.getAll().subscribe({
      next: (categories) => {
        this.categories.set(categories)
      },
      error: () => {

      }
    }
    )
  }
}
