import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
// import { ProductComponent } from '../product/product.component';
import { ProductComponent, Product } from '../product/product.component';
import { CategoryComponent } from '../category/category.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent,ProductComponent,CategoryComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  bestSellers: Product[] = [
    {
      image: "imgs/The Sill _ Official Site _ Houseplant Delivery & Plant Care.png",
      productName: "Sill Plant",
      productPrice: 100,
      onSale: true
    },
    {
      image: "imgs/RIGID SNOW BLACK POT.webp",
      productName: "RIGID SNOW BLACK POT",
      productPrice: 200,
      onSale: true
    },
    {
      image: "imgs/Donkey's Tail.webp",
      productName: "Tail Plant",
      productPrice: 150,
      onSale: true
    }
  ];
}
