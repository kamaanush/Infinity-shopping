import { Component, OnInit} from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrl: './computers.component.css'
})
export class ComputersComponent {
  smartphones: any[] = []; // This will store the smartphones data

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchSmartphones();
  }

  fetchSmartphones(): void {
    this.productService.getProductsByCategory('smartphones').subscribe(
      data => {
        console.log('API Response:', data); // Log the API response

        // Check if the 'products' property exists and is an array
        if (data && Array.isArray(data.products)) {
          this.smartphones = data.products; // Store the products directly
          console.log('Filtered Smartphones:', this.smartphones); // Log the filtered smartphones
        } else {
          console.error('Invalid API response format');
        }
      },
      error => console.error('Error fetching smartphones:', error)
    );
  }
}
