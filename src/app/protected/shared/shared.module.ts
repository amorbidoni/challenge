import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [NavBarComponent, LoadingComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavBarComponent, LoadingComponent],
})
export class SharedModule {}
