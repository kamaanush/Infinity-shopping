import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrl: './allproducts.component.css'
})
export class AllproductsComponent {
  products: any[] = [];
  filteredProducts: any[] = [];
  searchQuery: string = '';
  productForm: FormGroup;
  updateForm: FormGroup;
  showModal: boolean = false;
  showUpdateModal: boolean = false;
  selectedProduct: any = null;
  loading: boolean = true;
  error: string = '';

  constructor(private productService: ProductService, private fb: FormBuilder) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      images: ['', Validators.required]  // Add image field
    });

    this.updateForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      images: ['', Validators.required]  // Add image field
    });
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe(
      (data: any) => {
        this.products = data.products;
        this.filteredProducts = data.products;
        this.loading = false;
      },
      error => {
        this.error = 'Error fetching products';
        this.loading = false;
      }
    );
  }

  onSearchChange(searchQuery: string): void {
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  openUpdateModal(product: any): void {
    this.selectedProduct = product;
    this.updateForm.patchValue(product);
    this.showUpdateModal = true;
  }

  closeUpdateModal(): void {
    this.showUpdateModal = false;
  }

  onAddProduct(): void {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe(
        (response: any) => {
          this.products.push(response);
          this.filteredProducts = this.products;
          this.closeModal();
        },
        error => {
          this.error = 'Error adding product';
        }
      );
    }
  }

  onUpdateProduct(): void {
    if (this.updateForm.valid) {
      this.productService.updateProduct(this.selectedProduct.id, this.updateForm.value).subscribe(
        (response: any) => {
          const index = this.products.findIndex(p => p.id === this.selectedProduct.id);
          this.products[index] = response;
          this.filteredProducts = this.products;
          this.closeUpdateModal();
        },
        error => {
          this.error = 'Error updating product';
        }
      );
    }
  }
}
