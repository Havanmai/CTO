import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KPISegmentComponent } from './kpi-segment.component';

const routes: Routes = [{ path: '', component: KPISegmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KPISegmentRoutingModule { }
