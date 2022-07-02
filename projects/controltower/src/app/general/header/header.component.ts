import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService, Cache, UserModel, Utils } from 'common';
import { MenuSideBar } from '../menu';
import * as _ from 'lodash';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'cms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  public inputValue?: string;
  public routerLink?: string;
  public filteredOptions = [];
  listOfData: any[] = [];
  public optionGroups = [
    {
      title: 'Menu',
      children: [],
    },
  ];

  ListStartFast = [
    {
      title: 'Tạo tài khoản mới',
      icon: true,
      iconText: 'user-add',
      routerLink: '/users/create',
      permission: ['users:creating'],
      keyword: 'users-create',
      modal: false,
    },
    {
      title: 'Tạo locker mới',
      icon: false,
      iconText: '/assets/locker.svg',
      routerLink: '/lockers',
      permission: ['lockers:creating'],
      keyword: 'lockers-create',
      modal: true,
    },
    {
      title: 'Tạo phiếu xuất mới',
      icon: true,
      iconText: 'file-add',
      routerLink: '/store/way-bills',
      permission: ['store:way-bills-creating'],
      keyword: 'way-bills',
      modal: false,
    },
  ];

  listOfStart: any[] = [];
  public isChange = false;

  currentUser: UserModel;
  avatarStr: string;
  miniAvatarStr: string;
  constructor(
    private baseService: BaseService,
    private router: Router,
    private modal: NzModalService,
  ) {
    this.baseService.loadUserDataDone$.subscribe((data) => {
      setTimeout(() => {
        this.currentUser = this.baseService.getCachedUser();
        if (!this.currentUser.imageUrl || this.currentUser.imageUrl == '') {
          this.avatarStr = Utils.getTextByName(
            this.currentUser.lastName + ' ' + this.currentUser.firstName
          );
          this.miniAvatarStr = this.avatarStr.substr(0, 1);
        }
      }, 200);
    });
  }

  countpermission: number = 0;

  ngOnInit(): void {

  }
  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 72 && event.shiftKey && event.ctrlKey) {
      document.getElementById('inputSearch').focus();
    }
  }

  inputmenu:string;
  labelmenu:string;
  public onChange(data): void {
  }

  directionalSearchMenu(value:any){
    console.log("routerlink",value);
    this.inputmenu=value.title;
    this.labelmenu=value.title
    this.router.navigateByUrl(value.router_link);
  }

  directionalSearchNoMenu(value1:string,value2:any){
    this.router.navigateByUrl(value1.concat('/detail/',value2));
  }

  public onEnter(evt) {
    if (evt) {
      this.router.navigateByUrl(evt);
    }
  }

  tonggleMenu() {
    this.baseService.tonggleMenu();
  }

  changePassword() {
    this.router.navigateByUrl('/change-password');
  }

  logout() {
    Cache.clearAll();
    this.router.navigateByUrl('/login');
  }

  gotohome() {
    this.router.navigateByUrl('/controltower/home');
  }

  changeRouter(link: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.router.navigateByUrl(link));
      }, 0);
    });
  }
 checksearch:boolean=false;
  searchAll(){
    this.checksearch=true;

  }
  searchMobile(){
    this.checksearch=false;
  }




}
