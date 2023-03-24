import { ExchangeRatesService } from './../services/exchange-rates.service';
import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss']
})
export class ExchangeRatesComponent implements OnInit, OnDestroy{

  constructor(private service: ExchangeRatesService) { }

  allCurrencyRates: any = "";
  filteredRates: rate[] = [];
  rates: rate[] = [];
  subscription: any;

  ngOnInit(): void {
    this.subscription = this.service.getAll()
    .subscribe(
      response => {
        this.allCurrencyRates = response;
        this.filteredRates = this.allCurrencyRates = this.allCurrencyRates[0];
        this.rates = this.allCurrencyRates.rates;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

  filter(q: string){
    console.log(q);
  }
}

export interface rate{
  currency: string,
  code: string,
  bid: number,
  ask: number
}
