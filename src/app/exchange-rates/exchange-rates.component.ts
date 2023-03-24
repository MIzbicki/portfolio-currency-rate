import { ExchangeRatesService } from './../services/exchange-rates.service';
import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss']
})
export class ExchangeRatesComponent implements OnInit {

  constructor(private service: ExchangeRatesService) { }

  allCurrencyRates: any = "";
  rates: any[] = [];
  filterValue:string = "abss";

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(
      response => {
        this.allCurrencyRates = response;
        this.allCurrencyRates = this.allCurrencyRates[0];
        console.log(this.allCurrencyRates);
        this.rates = this.allCurrencyRates.rates;
        console.log(this.rates);
      }
    )
  }

  filter(q: any){
    console.log(q);
  }
}
