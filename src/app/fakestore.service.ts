import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakestoreService {


  private apiUrl = 'https://fakestoreapi.com/products';
  private cartApiUrl = 'https://fakestoreapi.com/carts'; // New URL for carts
  

  constructor(private http: HttpClient) {}

  // Method to fetch products from API
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

    // Method to add a new cart
    addCart(userId: number, date: string, products: { productId: number, quantity: number }[]): Observable<any> {
      const cartData = {
        userId,
        date,
        products
      };
  
      return this.http.post(this.cartApiUrl, cartData);
    }
}
