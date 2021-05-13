import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-plandetails',
  templateUrl: './plandetails.component.html',
  styleUrls: ['./plandetails.component.scss']
})
export class PlandetailsComponent implements OnInit {

  balance: string = '';

  constructor(private currency: CurrencyPipe) {
    this.balance = currency.transform(0, 'INR');
  }

  ngOnInit(): void {
  }

}
