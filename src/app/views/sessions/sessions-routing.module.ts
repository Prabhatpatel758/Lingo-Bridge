import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionsComponent } from './sessions.component';

const routes: Routes = [
    {
        path: '',
        component: SessionsComponent,
        data: {
            title: 'Plan Details'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SessionsRoutingModule { }
