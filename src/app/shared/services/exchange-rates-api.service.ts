import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExchangeRates } from '../interfaces/exchange-rates';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesApiService {
  min = -0.05;
  max = 0.05;



  randFloat() {
    return parseFloat((Math.random() * (this.max - this.min) + this.min).toFixed(2));
  };


  currencies = {
    "base":"EUR",
    "rates":{
       "EUR": 1.1,
       "USD": 1.1
    }
  };

  getCurrencies() {
    this.currencies.rates = {
         "EUR": 1.1 + this.randFloat(),
         "USD": 1.1 + this.randFloat()
    };
    return this.currencies;
  }

  constructor() {
    setInterval(() =>{
      return this.getCurrencies();
    }, 3000);
  }

  setBaseCurrencies(baseCurrencyCode){
     this.currencies.base = baseCurrencyCode;
     return this.getCurrencies();
  }
  getLatestExchangeRates(baseCurrencyCode): Observable<ExchangeRates> {
    return of(this.setBaseCurrencies(baseCurrencyCode));
  }


}
