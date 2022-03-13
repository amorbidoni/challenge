import { Input, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { ModalAnimation } from 'src/app/auth/animations/modal.animation';

import { ProductsInterface } from '../interfaces/product.interfaces';

@Component({
  selector: 'app-modal-product-confirmation',
  templateUrl: './modal-product-confirmation.component.html',
  styleUrls: ['./modal-product-confirmation.component.scss'],
})
export class ModalProductConfirmationComponent {
  @Input() product!: ProductsInterface;
  @Output() emmitCloseModal = new EventEmitter();

  closeModal() {
    this.emmitCloseModal.emit(false);
  }
  constructor() {}
}
