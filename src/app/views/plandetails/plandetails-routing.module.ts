import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlandetailsComponent } from './plandetails.component';

const routes: Routes = [
    {
        path: '',
        component: PlandetailsComponent,
        data: {
            title: 'Plan Details'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlanDetailsRoutingModule { }
