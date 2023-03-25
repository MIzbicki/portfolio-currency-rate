import { ExchangeRatesService } from './../services/exchange-rates.service';
import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss'],
})
export class ExchangeRatesComponent implements OnInit, OnDestroy {
  constructor(
    private service: ExchangeRatesService,
    private primengConfig: PrimeNGConfig,
    private themeService: ThemeService
  ) {}

  allCurrencyRates: any = '';
  filteredRates: rate[] = [];
  rates: rate[] = [];
  subscription: any;
  isDarkMode = false;

  ngOnInit(): void {
    //this.primengConfig.ripple = true;

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
    this.filteredRates = q
      ? this.rates.filter((r: rate) =>
          r.currency.toLowerCase().includes(q.toLowerCase())
        )
      : this.rates;

    console.log(this.filteredRates);
  }

  toggleTheme() {
    const theme = this.isDarkMode ? 'nova-light' : 'nova-dark';
    /*
    const body = document.querySelector('body');
    body.classList.remove('nova-light', 'nova-dark');
    body.classList.add(theme);
    */
    //this.isDarkMode ? console.log("ciemne") : console.log("jasne");
  }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }
}

export interface rate {
  currency: string;
  code: string;
  bid: number;
  ask: number;
}
