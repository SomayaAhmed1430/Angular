import { Component, Input } from '@angular/core';
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
  @Input() products: any[] = [];

}
