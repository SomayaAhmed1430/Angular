import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
// import { ElectronicsComponent } from './components/category-products/electronics/electronics.component';
import { CategoryProductsComponent } from './components/category-products/category-products/category-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

import { LayoutComponent } from './components/layout/layout.component'; // import layout

export const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // // { path: 'allproducts', component: AllProductsComponent },
  // { path: 'allproducts', component: AllProductsComponent },
  // { path: 'categories', component: CategoryComponent },
  // { path: 'category/:catName', component: CategoryProductsComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', redirectTo: 'home' }
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'allproducts', component: AllProductsComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
      { path: 'categories', component: CategoryComponent },
      { path: 'category/:catName', component: CategoryProductsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: 'home' }
];
