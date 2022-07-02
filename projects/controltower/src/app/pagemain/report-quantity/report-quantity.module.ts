import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportQuantityRoutingModule } from './report-quantity-routing.module';
import { ReportQuantityComponent } from './report-quantity.component';
import { QuantityDaysComponent } from './quantity-days/quantity-days.component';
import { QuantityMonthsComponent } from './quantity-months/quantity-months.component';
import { CoreModule } from 'common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { HttpClientModule } from '@angular/common/http';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@NgModule({
  declarations: [
    ReportQuantityComponent,
    QuantityDaysComponent,
    QuantityMonthsComponent,
    DateSelectorComponent
  ],
  imports: [
    CommonModule,
    ReportQuantityRoutingModule,
    CoreModule,
    NzButtonModule,
    NzLayoutModule,
    NzGridModule,
    NzTypographyModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzCardModule,
    HttpClientModule,
    NzAvatarModule,
    NzDropDownModule,
    NzSpinModule,
    NzImageModule,
    NzInputModule,
    NzSelectModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzTableModule,
    NzTagModule,
    NgApexchartsModule,
    NzTabsModule
  ]
})
export class ReportQuantityModule { }
