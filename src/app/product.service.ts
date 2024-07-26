import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
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
}
