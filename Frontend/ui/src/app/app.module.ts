import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { DemoUtilsModule } from './demo-utils/demo-utils.module';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';

import {MatExpansionModule} from '@angular/material/expansion';


import {FormsModule} from '@angular/forms';
// import {CalendarModule} from 'primeng/calendar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    DemoUtilsModule,
    AccordionModule,
    TabViewModule,
    CardModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
