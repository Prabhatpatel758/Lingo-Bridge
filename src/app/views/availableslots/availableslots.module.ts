import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AvailableslotsComponent } from './availableslots.component';
import { AvailableSlotsRoutingModule } from './availableslots-routing.module';

@NgModule({
    imports: [
        FormsModule,
        AvailableSlotsRoutingModule,
    ],
    declarations: [AvailableslotsComponent]
})
export class AvailableSlotsModule { }
