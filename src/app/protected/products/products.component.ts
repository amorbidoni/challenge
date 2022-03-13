import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductsInterface } from '../interfaces/product.interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private ProductService: ProductsService) {}
  products!: ProductsInterface[];
  loading: boolean = false;
  loadComplete: boolean = false;
  ngOnInit(): void {
    this.loading = true;
    this.ProductService.getAllProducts().subscribe((resp) => {
      this.loading = false;
      this.products = resp;
    });
  }
}
