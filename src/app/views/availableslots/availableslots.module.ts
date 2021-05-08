import { NgModule } from '@angular/core';
import { AvailableslotsComponent } from './availableslots.component';
import { AvailableSlotsRoutingModule } from './availableslots-routing.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
    imports: [
        AvailableSlotsRoutingModule,
        BsDatepickerModule.forRoot(),
        SharedModule
    ],
    declarations: [AvailableslotsComponent]
})
export class AvailableSlotsModule { }
