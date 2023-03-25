import { RatesOnPickedDateService } from './services/rates-on-picked-date.service';
import { ThemeService } from './services/theme.service';
import { TableModule } from 'primeng/table';
import { ExchangeRatesService } from './services/exchange-rates.service';
import { MyAppErrorHandler } from './my-errors-handler/app-error-handler';
import { MyAllDataServiceService } from './services/my-all-data-service.service';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem } from 'primeng/api';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CalendarComponent } from './calendar/calendar.component';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRatesComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    AccordionModule,
    KeyFilterModule,
    InputTextModule,
    InputSwitchModule,
    ButtonModule,
    CalendarModule,
    BrowserAnimationsModule,
    PaginatorModule
  ],
  providers: [
    MyAllDataServiceService,
    ExchangeRatesService,
    ThemeService,
    RatesOnPickedDateService,
    {provide: ErrorHandler, useClass: MyAppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
