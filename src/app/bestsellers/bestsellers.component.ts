import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrl: './bestsellers.component.css'
})
export class BestsellersComponent {
  bestSellers: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getBestSellers().subscribe(
      (data: any) => {
        this.bestSellers = data.products;
        console.log(this.bestSellers);
      },
      error => {
        console.error('Error fetching best sellers', error);
      }
    );
  }

  chunkArray(array: any[], chunkSize: number): any[][] {
    const results = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  }
}
