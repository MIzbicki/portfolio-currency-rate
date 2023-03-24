import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyAllDataServiceService {
  constructor(private http: HttpClient, @Inject('API_URL') private url: string)
  {

  }

  //wrong url - to tests
  private wrong_url = 'https://wrongurl.com/';

  getAll() {
    return this.http.get(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  create(resource: any) {
    return this.http.post(this.url, resource)
      .pipe(
        catchError(this.handleError)
      );
  }

  update(resource: any) {
    //put updates all object, patch update only few fields of the object
    return this.http.put(this.url + "/" + resource.id, JSON.stringify(resource))
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(id: number) {
    return this.http.delete(this.url + "/" + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  //Me: default global handler is MyAppErrorHandler, because I change it in app.module.ts ({provide: ErrorHandler, useClass: MyAppErrorHandler})
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('error.status === 0  ', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
