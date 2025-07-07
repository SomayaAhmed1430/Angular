import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { NavbarComponent } from '../navbar/navbar.component';
// import { ProductComponent } from '../product/product.component';
// import { ProductComponent, Product } from '../product/product.component';
import { CategoryComponent } from '../category/category.component';
// import { FooterComponent } from '../footer/footer.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
products: any[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.products = res.slice(0, 4);
    });
  }


}

