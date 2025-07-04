import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { AllProductsComponent } from './components/all-products/all-products.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'allproducts', component: AllProductsComponent },
  { path: 'allproducts', component: AllProductsComponent },
  { path: 'categories', component: CategoryComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
