import { ExchangeRatesService } from './../services/exchange-rates.service';
import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss'],
})
export class ExchangeRatesComponent implements OnInit, OnDestroy {
  constructor(private service: ExchangeRatesService) {}

  allCurrencyRates: any = '';
  filteredRates: rate[] = [];
  rates: rate[] = [];
  subscription: any;

  ngOnInit(): void {
    this.subscription = this.service.getAll().subscribe((response) => {
      this.allCurrencyRates = response;
      this.allCurrencyRates = this.allCurrencyRates[0];
      this.filteredRates = this.rates = this.allCurrencyRates.rates;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

  filter(q: string) {
    this.filteredRates = (q) ?
    this.rates.filter((r: rate) => r.currency.toLowerCase().includes(q.toLowerCase())):
    this.rates;

    console.log(this.filteredRates);
  }
}

export interface rate {
  currency: string;
  code: string;
  bid: number;
  ask: number;
}
