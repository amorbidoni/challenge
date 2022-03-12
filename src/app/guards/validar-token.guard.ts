import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../protected/services/products.service';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ValidarTokenGuard implements CanActivate, CanLoad {
  constructor(private AuthService: AuthService, private router: Router) {}
  canActivate(): Observable<boolean> | boolean {
    if (!this.AuthService.isLoggedIn()) {
      this.router.navigate(['/auth/login']);
    }

    return this.AuthService.isLoggedIn();
  }
  canLoad(): boolean {
    if (!this.AuthService.isLoggedIn()) {
      this.router.navigate(['/auth/login']);
    }
    return this.AuthService.isLoggedIn();
  }
}
