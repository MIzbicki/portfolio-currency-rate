import { ErrorHandler } from '@angular/core';

export class MyAppErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    alert('Wystąpił błąd');
    console.log(error);
  }
}
