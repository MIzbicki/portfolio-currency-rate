import { ErrorHandler } from '@angular/core';

export class MyAppErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    alert('An unexpected error occurred.');
    console.log(error);
  }
}
