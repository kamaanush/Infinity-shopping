import { Component } from '@angular/core';
import { FakestoreService } from '../fakestore.service';

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrl: './headphones.component.css'
})
export class HeadphonesComponent {
  products: any[] = [];

  constructor(private fakestoreapi: FakestoreService) {}

  ngOnInit(): void {
    this.fakestoreapi.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
