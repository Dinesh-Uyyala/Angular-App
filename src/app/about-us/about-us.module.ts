import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';
import { AboutServicesComponent } from './about-services/about-services.component';



@NgModule({
  declarations: [
    AboutCompanyComponent,
    AboutCeoComponent,
    AboutServicesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutUsModule { }
