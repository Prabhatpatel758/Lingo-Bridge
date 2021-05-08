import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PlandetailsComponent } from './plandetails.component';
import { PlanDetailsRoutingModule } from './plandetails-routing.module';

@NgModule({
    imports: [
        FormsModule,
        PlanDetailsRoutingModule,
    ],
    declarations: [PlandetailsComponent]
})
export class PlanDetailsModule { }
