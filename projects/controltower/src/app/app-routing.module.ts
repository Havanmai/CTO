import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterGuard } from 'common';
import { HomeComponent } from './general/home/home.component';
import { PagenotfoundComponent } from './general/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login',
    loadChildren: () =>
      import('./general/login/login.module').then((m) => m.LoginModule),
  },
 /*  {
    path: '',
    component: HomeComponent,
    canActivate:[RouterGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./pagemain/report-chart/report-chart.module').then(m => m.ReportChartModule) },
      { path: 'KPI', loadChildren: () => import('./pagemain/kpi/kpi.module').then(m => m.KPIModule) },
      { path: 'report-chart', loadChildren: () => import('./pagemain/report-chart/report-chart.module').then(m => m.ReportChartModule) },
      { path: 'accounts', loadChildren: () => import('./pagemain/account/account.module').then(m => m.AccountModule) },
      { path: 'warning-config', loadChildren: () => import('./pagemain/warning-config/warning-config.module').then(m => m.WarningConfigModule) },
      { path: 'evtp', loadChildren: () => import('./pagemain/evtp/evtp.module').then(m => m.EvtpModule) },
      { path: 'report', loadChildren: () => import('./pagemain/report/report.module').then(m => m.ReportModule) },
    ], */
  {
  path: 'controltower',
  component: HomeComponent,
  /* canActivate:[RouterGuard], */
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./pagemain/report-chart/report-chart.module').then(m => m.ReportChartModule) },
    { path: 'KPI', loadChildren: () => import('./pagemain/kpi/kpi.module').then(m => m.KPIModule) },
    { path: 'report-chart', loadChildren: () => import('./pagemain/report-chart/report-chart.module').then(m => m.ReportChartModule) },
    { path: 'accounts', loadChildren: () => import('./pagemain/account/account.module').then(m => m.AccountModule) },
    { path: 'warning-config', loadChildren: () => import('./pagemain/warning-config/warning-config.module').then(m => m.WarningConfigModule) },
    { path: 'evtp', loadChildren: () => import('./pagemain/evtp/evtp.module').then(m => m.EvtpModule) },
    { path: 'report', loadChildren: () => import('./pagemain/report/report.module').then(m => m.ReportModule) },
    { path: 'KPI-segment', loadChildren: () => import('./pagemain/kpi-segment/kpi-segment.module').then(m => m.KPISegmentModule) },
    { path: 'report-sales', loadChildren: () => import('./pagemain/report-sales/report-sales.module').then(m => m.ReportSalesModule) },
    { path: 'report-quantity', loadChildren: () => import('./pagemain/report-quantity/report-quantity.module').then(m => m.ReportQuantityModule) },
    { path: 'loss-warning', loadChildren: () => import('./pagemain/loss-warning/loss-warning.module').then(m => m.LossWarningModule) },
  ],
},





{
  path: '**',
  component: PagenotfoundComponent,
},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
