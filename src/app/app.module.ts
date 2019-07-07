import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { XraysComponent } from './xrays/xrays.component';
import { MrisComponent } from './mris/mris.component';
import { UsgsComponent } from './usgs/usgs.component';
import { BloodreportsComponent } from './bloodreports/bloodreports.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule, MatFormFieldModule ,MatNativeDateModule,MatListModule ,MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayComponent } from './display/display.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrescriptionsComponent,
    XraysComponent,
    MrisComponent,
    UsgsComponent,
    BloodreportsComponent,
    DisplayComponent
  ],
  imports: [
    MatFormFieldModule ,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule,
    ReactiveFormsModule,
    MatRadioModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
