import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Category {
  name: string;
  image: string;
  productCount: number;
}

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categories: Category[] = [
    {
      name: "Green Plants",
      image: "imgs/HPS_0089_5b4f1675-54f3-4e95-9602-8b435f1ca461_443x443.webp",
      productCount: 12
    },
    {
      name: 'Boots',
      image: "imgs/September_banner_1d_2cbab15c-27cc-454c-8df1-0ae09fa53d2b_887x493.webp",
      productCount: 8
    },
    {
      name: "Plants",
      image: "imgs/pexels-huy-phan-3209811.jpg",
      productCount: 5
    }
  ];
}
