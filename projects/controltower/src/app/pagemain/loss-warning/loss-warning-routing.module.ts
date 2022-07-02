import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LossWarningComponent } from './loss-warning.component';

const routes: Routes = [{ path: '', component: LossWarningComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LossWarningRoutingModule { }
