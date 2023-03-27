import { RatesOnPickedDateService } from './../services/rates-on-picked-date.service';
import { ExchangeRatesService } from './../services/exchange-rates.service';
import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss'],
})
export class ExchangeRatesComponent implements OnInit, OnDestroy {
  constructor(
    private service: ExchangeRatesService,
    private ratesOnPickedDate: RatesOnPickedDateService,
    private themeService: ThemeService
  ) {}

  allCurrencyRates: any = '';
  filteredRates: rate[] = [];
  rates: rate[] = [];
  subscription: any;
  subscription2: any;
  isDarkMode = false;
  currentDate = new Date();
  selectedDate = this.currentDate;
  dateToRequest: string = '';
  minDate = new Date(2002, 0, 2);

  testConsolLog(){
    console.log(this.minDate);
  }

  ngOnInit(): void {
    this.testConsolLog();

    this.subscription = this.service.getAll().subscribe((response) => {
      this.allCurrencyRates = response;
      this.allCurrencyRates = this.allCurrencyRates[0];
      this.filteredRates = this.rates = this.allCurrencyRates.rates;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
    this.subscription2.unsubscribe;
  }

  filter(q: string) {
    this.filteredRates = q
      ? this.rates.filter((r: rate) =>
          r.currency.toLowerCase().includes(q.toLowerCase()) ||
          r.code.toLowerCase().includes(q.toLowerCase())
        )
      : this.rates;

    console.log(this.filteredRates);
  }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }

  clearFilter() {
    //document.getElementById('query')?.value = "";
    const inputElement = document.getElementById('query') as HTMLInputElement;
    inputElement.value = '';
    this.filter("");
  }

  prepareDateToRequest() {
    const dateToRequest = new Date(this.selectedDate);
    const year = dateToRequest.getFullYear();
    const month = ('0' + (dateToRequest.getMonth() + 1)).slice(-2);
    const day = ('0' + dateToRequest.getDate()).slice(-2);
    this.dateToRequest = `${year}-${month}-${day}`;
  }

  handleDateSelect() {
    this.prepareDateToRequest();
    this.subscription2 = this.ratesOnPickedDate
      .getRatesOnDate(
        'https://api.nbp.pl/api/exchangerates/tables/A/' +
          this.dateToRequest +
          '/?format=json'
      )
      .subscribe((response) => {
        this.allCurrencyRates = response;
        console.log(response);
        this.allCurrencyRates = this.allCurrencyRates[0];
        this.filteredRates = this.rates = this.allCurrencyRates.rates;
      });
  }
}

export interface rate {
  currency: string;
  code: string;
  mid: number;
}
