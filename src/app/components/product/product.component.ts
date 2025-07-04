import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Product {
  image: string;
  productName: string;
  productPrice: number;
  onSale: boolean;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: Product[] = [
    {
      image: "imgs/The Sill _ Official Site _ Houseplant Delivery & Plant Care.png",
      productName: "Sill Plant",
      productPrice: 100,
      onSale: true
    },
    {
      image: "imgs/Poinsettia.jpg",
      productName: "Poinsettia",
      productPrice: 150,
      onSale: false
    },
    {
      image: "imgs/RIGID SNOW BLACK POT.webp",
      productName: "RIGID SNOW BLACK POT",
      productPrice: 200,
      onSale: true
    },
    {
      image: "imgs/Cram In Crocuses.jpg.webp",
      productName: "Cram In Crocuses Plant",
      productPrice: 150,
      onSale: false
    },
    {
      image: "imgs/Phalaenopsis Orchid.jpg",
      productName: "Orchid Plant",
      productPrice: 150,
      onSale: false
    },
    {
      image: "imgs/Donkey's Tail.webp",
      productName: "Tail Plant",
      productPrice: 150,
      onSale: true
    },
  ];
}
