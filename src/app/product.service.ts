import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(limit: number, skip: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?limit=${limit}&skip=${skip}`);
  }  
  searchProducts(query: string): Observable<any> {
    const searchUrl = `${this.apiUrl}/search?q=${query}`;
    return this.http.get<any>(searchUrl);
  }
  addProduct(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, product);
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, product);
  }
  getBestSellers(): Observable<any> {
    const bestSellersUrl = `${this.apiUrl}?limit=10&skip=10&select=title,price,images`;
    return this.http.get<any>(bestSellersUrl);
  }
    // Fetch products by category
    getProductsByCategory(category: string): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/category/${category}`);
    }
}
