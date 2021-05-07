import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WalletComponent } from './wallet.component';
import { WalletRoutingModule } from './wallet-routing.module';

@NgModule({
    imports: [
        FormsModule,
        WalletRoutingModule,
    ],
    declarations: [WalletComponent]
})
export class WalletModule { }
