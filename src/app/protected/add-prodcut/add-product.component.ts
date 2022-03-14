import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

import { ProductsInterface } from '../interfaces/product.interfaces';
import { ModalAnimation } from '../shared/animations/modal.animation';
import { ProductsService } from '../services/products.service';
import { adddProductInterface } from '../interfaces/addProduct.interfaces';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  animations: [ModalAnimation],
})
export class AddProdcutComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private sanitizer: DomSanitizer
  ) {}
  alert: boolean = true;
  blurFiltert: boolean = false;
  codeRegex: RegExp = /^[0-9]\d+$/;
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

  // HANDLE SUBMIT
  newProductAdded!: ProductsInterface;
  newProductPreview!: adddProductInterface;
  modalConfirmationOpen: boolean = false;
  submit() {
    this.modalConfirmationOpen = true;
    this.blurFiltert = true;
    let controls = this.myForm.controls;
    this.newProductPreview = {
      SKU: controls.SKU.value,
      code: controls.code.value,
      name: controls.name.value,
      description: controls.description.value,
      pictures: [],
      price: controls.price.value,
      currency: controls.currency.value,
      __v: 0,
    };
  }
  addNewProduct() {
    this.productService.addProduct(this.newProductPreview).subscribe((res) => {
      this.newProductAdded = res;
      this.myForm.reset();
      this.inputFileData = '';
    });
  }
  // HANDLE MODAL CONFIRMATION
  handleConfirmationModal(e: boolean) {
    this.blurFiltert = false;
    this.modalConfirmationOpen = false;
    if (e === true) {
      this.addNewProduct();
      this.modalConfirmationOpen = false;
    }
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

  //HABLDE INPUT FILES
  inputFileData: string = '';
  inputFileDataArr: any = [];
  imageUrl!: any;
  filesDataArr: any = [];
  srcArr: any = [];

  addPictures(e: any) {
    let filesImages = e.target.files;

    for (let i = 0; i < filesImages.length; i++) {
      this.inputFileDataArr.push(filesImages[i].name);
      this.inputFileData = this.inputFileDataArr.join(', ');
      //
      this.filesDataArr.push(filesImages[i]);
      this.extraerBase64(filesImages[i]).then((image: any) => {
        this.srcArr.push(image.base);
        this.imageUrl = this.srcArr[0];
      });
    }
  }

  // image to base64
  extraerBase64 = async ($event: any) =>
    new Promise((resolve, reject): any => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({ base: reader.result });
        };
        reader.onerror = (error) => {
          resolve({
            base: null,
          });
        };
      } catch (error) {
        return null;
      }
    });

  // HANDLE BACKDROPFILTER
  hanldeFilterBlur() {
    if (this.modalConfirmationOpen) {
      return {
        filter: 'blur(5px)',
      };
    }
    return {};
  }
}
