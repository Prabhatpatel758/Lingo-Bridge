import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-plandetails',
  templateUrl: './plandetails.component.html',
  styleUrls: ['./plandetails.component.scss']
})
export class PlandetailsComponent implements OnInit {
  amount: number = 0;
  balance: string = '';
  month: number = 0;
  sessionDuration: number = 0;
  frequency: number = 0;
  perMonth_1month: number = 0;
  perMonth_3month: number = 0;
  perMonth_6month: number = 0;
  perMonth_12month: number = 0;
  month1: string = '';
  month3: string = '';
  month6: string = '';
  month12: string = '';
  plan: string = '';
  GST: string = '';
  Total: string = '';
  isPayment: boolean = false;

  constructor(private currency: CurrencyPipe) {
    this.month1 = this.currency.transform(this.perMonth_1month, 'INR');
    this.month3 = this.currency.transform(this.perMonth_3month, 'INR');
    this.month6 = this.currency.transform(this.perMonth_6month, 'INR');
    this.month12 = this.currency.transform(this.perMonth_12month, 'INR');

    this.month1 = this.month1.substring(0, this.month1.indexOf('.'));
    this.month3 = this.month3.substring(0, this.month3.indexOf('.'));
    this.month6 = this.month6.substring(0, this.month6.indexOf('.'));
    this.month12 = this.month12.substring(0, this.month12.indexOf('.'));
  }

  ngOnInit(): void {
  }

  selectMonth = () => {

  }
  calculateBalance = () => {
    if (this.sessionDuration !== 0 && this.frequency !== 0) {
      if (this.frequency == 1 && this.sessionDuration == 15) {
        this.perMonth_1month = 600;
        this.perMonth_3month = 580;
        this.perMonth_6month = 570;
        this.perMonth_12month = 550;
        if (this.month == 1) {
          this.amount = 600;
        }
        if (this.month == 3) {
          this.amount = 580 * this.month;
        }
        if (this.month == 6) {
          this.amount = 570 * this.month;
        }
        if (this.month == 12) {
          this.amount = 550 * this.month;
        }
      }

      if (this.frequency == 3 && this.sessionDuration == 15) {
        this.perMonth_1month = 1700;
        this.perMonth_3month = 1650;
        this.perMonth_6month = 1600;
        this.perMonth_12month = 1550;
        if (this.month == 1) {
          this.amount = 1700;
        }
        if (this.month == 3) {
          this.amount = 1650 * this.month;
        }
        if (this.month == 6) {
          this.amount = 1600 * this.month;
        }
        if (this.month == 12) {
          this.amount = 1550 * this.month;
        }
      }

      if (this.frequency == 5 && this.sessionDuration == 15) {
        this.perMonth_1month = 2700;
        this.perMonth_3month = 2650;
        this.perMonth_6month = 2600;
        this.perMonth_12month = 2550;
        if (this.month == 1) {
          this.amount = 2700;
        }
        if (this.month == 3) {
          this.amount = 2650 * this.month;
        }
        if (this.month == 6) {
          this.amount = 2600 * this.month;
        }
        if (this.month == 12) {
          this.amount = 2550 * this.month;
        }
      }

      if (this.frequency == 7 && this.sessionDuration == 15) {
        this.perMonth_1month = 3600;
        this.perMonth_3month = 3550;
        this.perMonth_6month = 3500;
        this.perMonth_12month = 3450;
        if (this.month == 1) {
          this.amount = 3600;
        }
        if (this.month == 3) {
          this.amount = 3550 * this.month;
        }
        if (this.month == 6) {
          this.amount = 3500 * this.month;
        }
        if (this.month == 12) {
          this.amount = 3450 * this.month;
        }
      }

      if (this.frequency == 1 && this.sessionDuration == 25) {
        this.perMonth_1month = 800;
        this.perMonth_3month = 780;
        this.perMonth_6month = 760;
        this.perMonth_12month = 700;
        if (this.month == 1) {
          this.amount = 800;
        }
        if (this.month == 3) {
          this.amount = 780 * this.month;
        }
        if (this.month == 6) {
          this.amount = 760 * this.month;
        }
        if (this.month == 12) {
          this.amount = 700 * this.month;
        }
      }

      if (this.frequency == 3 && this.sessionDuration == 25) {
        this.perMonth_1month = 2300;
        this.perMonth_3month = 2250;
        this.perMonth_6month = 2200;
        this.perMonth_12month = 2100;
        if (this.month == 1) {
          this.amount = 2300;
        }
        if (this.month == 3) {
          this.amount = 2250 * this.month;
        }
        if (this.month == 6) {
          this.amount = 2200 * this.month;
        }
        if (this.month == 12) {
          this.amount = 2100 * this.month;
        }
      }

      if (this.frequency == 5 && this.sessionDuration == 25) {
        this.perMonth_1month = 3900;
        this.perMonth_3month = 3850;
        this.perMonth_6month = 3800;
        this.perMonth_12month = 3700;
        if (this.month == 1) {
          this.amount = 3900;
        }
        if (this.month == 3) {
          this.amount = 3850 * this.month;
        }
        if (this.month == 6) {
          this.amount = 3800 * this.month;
        }
        if (this.month == 12) {
          this.amount = 3700 * this.month;
        }
      }

      if (this.frequency == 7 && this.sessionDuration == 25) {
        this.perMonth_1month = 5100;
        this.perMonth_3month = 5050;
        this.perMonth_6month = 5000;
        this.perMonth_12month = 4900;
        if (this.month == 1) {
          this.amount = 5100;
        }
        if (this.month == 3) {
          this.amount = 5050 * this.month;
        }
        if (this.month == 6) {
          this.amount = 5000 * this.month;
        }
        if (this.month == 12) {
          this.amount = 4900 * this.month;
        }
      }
    }

    this.month1 = this.currency.transform(this.perMonth_1month, 'INR');
    this.month3 = this.currency.transform(this.perMonth_3month, 'INR');
    this.month6 = this.currency.transform(this.perMonth_6month, 'INR');
    this.month12 = this.currency.transform(this.perMonth_12month, 'INR');
    this.month1 = this.month1.substring(0, this.month1.indexOf('.'));
    this.month3 = this.month3.substring(0, this.month3.indexOf('.'));
    this.month6 = this.month6.substring(0, this.month6.indexOf('.'));
    this.month12 = this.month12.substring(0, this.month12.indexOf('.'));

    this.plan = this.frequency + " day / week for " + this.month + " month.";

    let gst = this.currency.transform(Math.round(this.amount * .18), 'INR');
    this.GST = gst.substring(0, gst.indexOf('.'));

    this.balance = this.currency.transform(this.amount, 'INR');
    this.balance = this.balance.substring(0, this.balance.indexOf('.'));

    let total = this.amount + Math.round(this.amount * .18);
    this.Total = this.currency.transform(total, 'INR');
    this.Total = this.Total.substring(0, this.Total.indexOf('.'));

    if (this.amount != 0)
      this.isPayment = true;
  }

}
