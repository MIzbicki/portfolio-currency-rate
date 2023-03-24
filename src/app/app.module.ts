import { TableModule } from 'primeng/table';
import { ExchangeRatesService } from './services/exchange-rates.service';
import { MyAppErrorHandler } from './my-errors-handler/app-error-handler';
import { MyAllDataServiceService } from './services/my-all-data-service.service';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem } from 'primeng/api';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRatesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    AccordionModule
  ],
  providers: [
    MyAllDataServiceService,
    ExchangeRatesService,
    {provide: ErrorHandler, useClass: MyAppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
