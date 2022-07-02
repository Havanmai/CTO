import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BaseService, Cache, Constants } from 'common';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'cms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  showLoading = false;

  constructor(
    private baseService: BaseService,
    private message: NzMessageService,
    private notification: NzNotificationService,
    private cdr: ChangeDetectorRef
  ) {
    this.baseService.tongleMenu$.subscribe((data) => {
      if (this.isCollapsed) this.isCollapsed = false;
      else this.isCollapsed = true;

      this.baseService.menuCollapsed(this.isCollapsed);
    });

    this.baseService.showLoading$.subscribe((data: boolean) => {
      this.showLoading = data;
      this.cdr.detectChanges();
    });

    this.baseService.showToast$.subscribe((data: any) => {
      if (data) {
        switch (data.type) {
          case Constants.TOAST_OK:
            this.message.success(data.prop, {
              nzDuration: data.duration,
            });
            break;
          case Constants.TOAST_WARNING:
            this.message.warning(data.prop, {
              nzDuration: data.duration,
            });
            break;
          case Constants.TOAST_ERROR:
            this.message.error(data.prop, {
              nzDuration: data.duration,
            });
            break;
          case Constants.TOAST_LOADING:
            this.message.loading(data.prop, {
              nzDuration: data.duration,
            });
            break;
          default:
            this.message.info(data.prop, {
              nzDuration: data.duration,
            });
            break;
        }
      }
    });

    this.baseService.showNotification$.subscribe((data: any) => {
      if (data) {
        switch (data.type) {
          case Constants.NOTI_OK:
            this.notification.create('success', data.title, data.prop, {
              nzDuration: data.duration,
              nzPlacement: 'bottomRight',
              nzClass: 'ant-notification-notice-success',
            });
            break;
          case Constants.NOTI_WARNING:
            this.notification.create('warning', data.title, data.prop, {
              nzDuration: data.duration,
              nzPlacement: 'bottomRight',
              nzClass: 'ant-notification-notice-warning',
            });
            break;
          case Constants.NOTI_ERROR:
            this.notification.create('error', data.title, data.prop, {
              nzDuration: data.duration * 5,
              nzPlacement: 'bottomRight',
              nzClass: 'ant-notification-notice-error',
            });
            break;
          default:
            this.notification.create('info', data.title, data.prop, {
              nzDuration: data.duration,
              nzPlacement: 'bottomRight',
              nzClass: 'ant-notification-notice-info',
            });
            break;
        }
      }
    });
  }

  ngOnInit(): void {
    //get user Detail
    this.showLoading = true;
  }
}
