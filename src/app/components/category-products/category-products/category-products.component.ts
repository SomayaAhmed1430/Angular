import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent implements OnInit {
  categoryName: string = '';
  products: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const category = params.get('catName');
      if (category) {
        this.categoryName = category;
        this.loadCategoryProducts(category);
      }
    });
  }

  loadCategoryProducts(category: string) {
    this.productService.getProductsByCategory(category).subscribe(res => {
      this.products = res;
    });
  }
}
