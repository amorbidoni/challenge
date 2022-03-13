import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AddProdcutComponent } from './add-prodcut/add-product.component';
import { SharedModule } from './shared/shared.module';
import { ModalProductConfirmationComponent } from './modal-product-confirmation/modal-product-confirmation.component';

@NgModule({
  declarations: [DashboardComponent, ProductsComponent, AddProdcutComponent, ModalProductConfirmationComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ProtectedRoutingModule,
    SharedModule,
  ],
})
export class ProtectedModule {}
