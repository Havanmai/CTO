import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportChartComponent } from './report-chart.component';

const routes: Routes = [{ path: '', component: ReportChartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportChartRoutingModule { }
