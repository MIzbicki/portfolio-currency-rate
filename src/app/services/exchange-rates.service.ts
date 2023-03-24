import { HttpClient } from '@angular/common/http';
import { MyAllDataServiceService } from './my-all-data-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService extends MyAllDataServiceService {

  constructor(http: HttpClient) {
    super(http, 'https://api.nbp.pl/api/exchangerates/tables/C?format=json');
  }
}
