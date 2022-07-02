import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CoreModule, MyInterceptor } from 'common';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzPipesModule } from 'ng-zorro-antd/pipes';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { registerLocaleData } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { BreadcrumbComponent } from './general/breadcrumb/breadcrumb.component';
import { HeaderComponent } from './general/header/header.component';
import { HomeComponent } from './general/home/home.component';
import { SidebarComponent } from './general/sidebar/sidebar.component';
import { PagenotfoundComponent } from './general/pagenotfound/pagenotfound.component';
import en from '@angular/common/locales/en';
import { HighchartsChartModule } from 'highcharts-angular';

registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
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
    NzResultModule,
    NzDropDownModule,
    NzSpinModule,
    NzMessageModule,
    NzNotificationModule,
    NzAffixModule,
    NzPipesModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzModalModule,
    NzAutocompleteModule,
    NzTagModule,
    NzDividerModule,
    HighchartsChartModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true,
    },
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
