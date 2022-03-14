import { Input, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { ModalAnimation } from 'src/app/auth/animations/modal.animation';

import { ProductsInterface } from '../interfaces/product.interfaces';
import { adddProductInterface } from '../interfaces/addProduct.interfaces';

@Component({
  selector: 'app-modal-product-confirmation',
  templateUrl: './modal-product-confirmation.component.html',
  styleUrls: ['./modal-product-confirmation.component.scss'],
  animations: [ModalAnimation],
})
export class ModalProductConfirmationComponent {
  @Input() product!: adddProductInterface;
  @Input() imageUrl!: string;
  @Output() emmitCloseModal = new EventEmitter();

  closeModal(e: boolean) {
    this.emmitCloseModal.emit(e);
  }
  constructor() {}
}
