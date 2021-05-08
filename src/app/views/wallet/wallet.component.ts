import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  balance = '';
  constructor(private currency: CurrencyPipe) {
    this.balance = currency.transform(0, 'INR');
  }

  ngOnInit(): void {
  }

  addMoneyToWallet = () => {

  }

}
