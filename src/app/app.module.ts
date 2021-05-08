import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DatePipe, CurrencyPipe } from '@angular/common';


import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './landingcomponents/home/home.component';
import { LandingComponent } from './landingcomponents/landing/landing.component';
import { LandingfooterComponent } from './landingcomponents/landingfooter/landingfooter.component';
import { PlansandpricingComponent } from './landingcomponents/plansandpricing/plansandpricing.component';
import { TeachwithusComponent } from './landingcomponents/teachwithus/teachwithus.component';
import { NavbarmainComponent } from './landingcomponents/navbarmain/navbarmain.component';
import { DefaultLayoutComponent } from './containers';
import { LoginService } from './services/login.service';
import { AuthGuard } from './services/auth.guard';
import { CountdownModule } from 'ngx-countdown';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './landingcomponents/login/login.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    IconModule,
    IconSetModule.forRoot(),
    NgxIntlTelInputModule,
    HttpClientModule,
    CountdownModule,


  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    HomeComponent,
    LandingComponent,
    LandingfooterComponent,
    PlansandpricingComponent,
    TeachwithusComponent,
    NavbarmainComponent,
  ],
  providers: [LoginService, AuthGuard, [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    IconSetService, DatePipe,
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
