import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrl: './bestsellers.component.css'
})
export class BestsellersComponent {
  bestSellers: any[] = [];
  loading: boolean = true;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getBestSellers().subscribe(
      (data: any) => {
        this.bestSellers = data.products;
        this.loading = false;// Set loading to false once data is fetched
        console.log(this.bestSellers);
      },
      error => {
        console.error('Error fetching best sellers', error);
        this.loading = false;  // Also set loading to false in case of an error
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
