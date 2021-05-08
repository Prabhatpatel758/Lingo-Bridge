import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SessionsComponent } from './sessions.component';
import { SessionsRoutingModule } from './sessions-routing.module';

@NgModule({
    imports: [
        FormsModule,
        SessionsRoutingModule,
    ],
    declarations: [SessionsComponent]
})
export class SessionsModule { }
