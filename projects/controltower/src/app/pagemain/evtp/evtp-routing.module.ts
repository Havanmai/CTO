import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvtpComponent } from './evtp.component';

const routes: Routes = [{ path: '', component: EvtpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvtpRoutingModule { }
