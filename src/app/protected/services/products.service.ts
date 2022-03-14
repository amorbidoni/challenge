import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsInterface } from '../interfaces/product.interfaces';
import { adddProductInterface } from '../interfaces/addProduct.interfaces';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
    'Access-control-allow-origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // handleErrors
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  constructor(private http: HttpClient) {}

  baseUrl: string = environment.baseUrl;

  getAllProducts(): Observable<ProductsInterface[]> {
    let url = `${this.baseUrl}/products`;
    return this.http
      .get<ProductsInterface[]>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  addProduct(product: adddProductInterface): Observable<ProductsInterface> {
    let url: string = `${this.baseUrl}/addproduct`;

    return this.http
      .post<ProductsInterface>(url, product, httpOptions)
      .pipe(catchError(this.handleError));
  }
}
