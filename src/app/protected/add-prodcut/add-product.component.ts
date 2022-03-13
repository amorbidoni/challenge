import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { ProductsInterface } from '../interfaces/product.interfaces';
import { ModalAnimation } from '../shared/animations/modal.animation';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  animations: [ModalAnimation],
})
export class AddProdcutComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private productService: ProductsService
  ) {}
  alert: boolean = true;
  codeRegex: RegExp = /[0-9]/;
  myForm: FormGroup = this.fb.group({
    name: [, Validators.required],
    SKU: [, Validators.required],
    code: [, [Validators.required, Validators.pattern(this.codeRegex)]],
    description: [, Validators.required],
    pictures: [, Validators.required],
    price: [, Validators.required],
    currency: [, Validators.required],
    // __v: [, Validators.required],
  });
  ngOnInit(): void {}
  newProductAdded!: ProductsInterface;
  modalConfirmationOpen: boolean = false;
  submit() {
    let controls = this.myForm.controls;
    let newProduct = {
      SKU: controls.SKU.value,
      code: controls.code.value,
      name: controls.name.value,
      description: controls.description.value,
      pictures: ['http://placekitten.com/200/200'],
      price: controls.price.value,
      currency: controls.currency.value,
      __v: 0,
    };

    this.productService.addProduct(newProduct).subscribe((res) => {
      this.modalConfirmationOpen = true;
      this.newProductAdded = res;
      this.myForm.reset();
    });
  }
  //FORM VALIDATORS
  validForm(campo: string): {} | null {
    if (
      this.myForm.controls[campo].errors &&
      this.myForm.controls[campo].touched
    ) {
      return { errorMsg: 'Campo obligatorio' };
    } else {
      return null;
    }
  }
  styleLineForm(campo: string) {
    if (this.validForm(campo)) {
      return {
        backgroundColor: '#c22132',
      };
    }
    return {};
  }
  get codeErrorMsg() {
    let error = this.myForm.get('code')?.errors;
    if (error?.pattern) {
      return 'The code must be numeric';
    } else if (error?.required) {
      return 'Required';
    }
    return 'Required';
  }

  //
  inputFileData: string = '';
  addPictures(e: any) {
    let filesImages = e.target.files;
    let filesDataArr = [];

    for (let i = 0; i < filesImages.length; i++) {
      filesDataArr.push(filesImages[i].name);
      this.inputFileData = filesDataArr.join(', ');
    }
  }
  closeModalConfirmation(e: boolean) {
    this.modalConfirmationOpen = false;
  }
}
