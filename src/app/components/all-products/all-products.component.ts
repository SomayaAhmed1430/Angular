import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductComponent } from '../product/product.component';
// import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule, ProductComponent, FooterComponent],
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  // allProducts = [
  //   {
  //     image: "imgs/The Sill _ Official Site _ Houseplant Delivery & Plant Care.png",
  //     productName: "Sill Plant",
  //     productPrice: 100,
  //     onSale: true
  //   },
  //   {
  //     image: "imgs/Poinsettia.jpg",
  //     productName: "Poinsettia",
  //     productPrice: 150,
  //     onSale: false
  //   },
  //   {
  //     image: "imgs/RIGID SNOW BLACK POT.webp",
  //     productName: "RIGID SNOW BLACK POT",
  //     productPrice: 200,
  //     onSale: true
  //   },
  //   {
  //     image: "imgs/Cram In Crocuses.jpg.webp",
  //     productName: "Cram In Crocuses Plant",
  //     productPrice: 150,
  //     onSale: false
  //   },
  //   {
  //     image: "imgs/Phalaenopsis Orchid.jpg",
  //     productName: "Orchid Plant",
  //     productPrice: 150,
  //     onSale: false
  //   },
  //   {
  //     image: "imgs/Donkey's Tail.webp",
  //     productName: "Tail Plant",
  //     productPrice: 150,
  //     onSale: true
  //   },
  // ];

  allProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res: any[]) => {
      console.log('API RESPONSE:', res);
      this.allProducts = res;
    });
  }
}
