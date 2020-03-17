import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverallComponent } from './overall/overall.component';
import { DefendComponent } from './defend/defend.component';


const routes: Routes = [
  {
    path: 'portal',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'overall', component: OverallComponent },
      { path: 'defend', component: DefendComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
