import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MyAllDataServiceService } from './my-all-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class RatesOnPickedDateService extends MyAllDataServiceService {

  constructor(http: HttpClient) {
    super(http, '');
  }

}
