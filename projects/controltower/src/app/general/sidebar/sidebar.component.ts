import { Component, OnInit } from '@angular/core';
import { BaseService, Constants } from 'common';
import { MenuSideBar } from '../menu';

export class MenuData {
  title: string;
  icon?: string;
  routerLink?: string;
  permission?: string;
  children?: MenuData[];
  constructor(obj: any) {
    this.parse(obj);
  }
  parse(obj: any) {
    this.title = obj.title;
    this.icon = obj.icon;
    this.routerLink = obj.routerLink;
    this.permission = obj.permission;
    this.children = obj.children;
  }
}

@Component({
  selector: 'cms-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
})
export class SidebarComponent implements OnInit {
  menuData = MenuSideBar;

  constructor(
    private baseService: BaseService
  ) {}
  listOfData: any[] = [];
  listOfMenu: any[] = [];
  listDataChild: any[] = [];
  ngOnInit(): void {

  }
}
