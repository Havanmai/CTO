import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportQuantityComponent } from './report-quantity.component';

const routes: Routes = [{ path: '', component: ReportQuantityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportQuantityRoutingModule { }
