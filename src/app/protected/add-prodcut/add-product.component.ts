import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProdcutComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private productService: ProductsService
  ) {}
  alert: boolean = true;
  myForm: FormGroup = this.fb.group({
    name: [],
  });
  ngOnInit(): void {}
  submit() {
    this.productService
      .addProduct({
        SKU: '234221231232',
        code: 121231203,
        name: 'Manzana Verde',
        description: 'Cajón Manzana verde - 20kg',
        // pictures: 'http://placekitten.com/200/200',
        price: 922,
        currency: '.s/',
        __v: 0,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
