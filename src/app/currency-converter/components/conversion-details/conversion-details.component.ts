import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ExchangeRatesApiService } from 'src/app/shared/services/exchange-rates-api.service';

import { MappedCurrencyRate } from 'src/app/shared/interfaces/currency-rate';

@Component({
  selector: 'app-conversion-details',
  templateUrl: './conversion-details.component.html',
  styleUrls: ['./conversion-details.component.scss']
})
export class ConversionDetailsComponent implements OnChanges {
  @Input() amount: number;
  @Input() result: number;

  @Input() fromCurrencyRate: MappedCurrencyRate;
  @Input() toCurrencyRate: MappedCurrencyRate;

  fromCurrency: string;
  toCurrency: string;

  toRate: number;
  fromRate: number;

  dataSource = new MatTableDataSource();
  displayedColumns = ['rateReal', 'valInit', 'valCalc'];
  array_last_five: [];

  constructor( private exchangeRatesApiService: ExchangeRatesApiService) { }

  getLastFiveHist(tabHist){
    tabHist.length > 5 ? this.array_last_five = tabHist.slice(-5) : this.array_last_five = tabHist;
    return this.array_last_five;
  }

  getHistoryTab(newHistory){
    this.exchangeRatesApiService
    .showHistoryConversion(newHistory)
    .subscribe(
      newH => {
        if(newH) {
          return this.dataSource.data = newH;
        }
      })
      this.dataSource.data = this.getLastFiveHist(this.dataSource.data)
      return this.dataSource.data;
  }

  ngOnChanges(changes: SimpleChanges): void {
    let newHistory;
    this.fromCurrency = this.fromCurrencyRate && this.fromCurrencyRate.currency;
    this.fromRate = this.fromCurrencyRate && this.fromCurrencyRate.rate;

    this.toCurrency = this.toCurrencyRate && this.toCurrencyRate.currency;
    this.toRate = this.toCurrencyRate && this.toCurrencyRate.rate;

    newHistory = {
      "rateInit":(+this.toRate / +this.fromRate),
      "fromCurrencyRate": this.fromCurrencyRate,
      "toCurrencyRate": this.toCurrencyRate,
      "amount": this.amount,
      "result": this.result
    };
    this.getHistoryTab(newHistory);
  }
}
