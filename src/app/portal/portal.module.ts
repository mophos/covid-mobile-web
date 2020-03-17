import { PipeModule } from './../pipe/pipe.module';
import { ApiService } from './service/api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { OverallComponent } from './overall/overall.component';
import { DefendComponent } from './defend/defend.component';


@NgModule({
  declarations: [LayoutComponent, HomeComponent, OverallComponent, DefendComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    PipeModule
  ],
  providers: [
    ApiService
  ]

})
export class PortalModule { }
