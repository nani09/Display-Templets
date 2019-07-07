import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { XraysComponent } from './xrays/xrays.component';
import { UsgsComponent } from './usgs/usgs.component';
import { MrisComponent } from './mris/mris.component';
import { BloodreportsComponent } from './bloodreports/bloodreports.component';

const routes: Routes = [ 
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', 
    children:[
      {path:'', component: HomeComponent},
      {path:'prescriptions', component: PrescriptionsComponent},
      {path:'bloodreports',component:BloodreportsComponent},
      {path:'mris',component:MrisComponent},
      {path:'xrays',component:XraysComponent},
      {path:'usgs',component:UsgsComponent}  
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
