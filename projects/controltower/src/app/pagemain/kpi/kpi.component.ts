import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService, Utils } from 'common';
import { Tinh } from '../kpi-segment/models/tinh.model';
/* import { PostOffice } from './buucuc.model'; */
import { KPI } from './kpi.model';
import { KpiService } from './kpi.service';
import { SP } from './sp.model';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css']
})
export class KPIComponent implements OnInit {
  listOfData: any[] = [];
  page: number;
  size: number;
  total: number;
  keyword: string;
  status: string;
  enterFrom: string;
  enterTo: string;
  listOfProvice: Tinh[] = [];
  postId: string;
  isLoadingScroll: boolean = false;
  listOfProviceMan: any[] = [];
  lockersize: number;
  postmanId: string;
  isLoadingPostmanScroll: boolean = false;
  checkpost:boolean=false;

  clickDetail: boolean = false;
  checkUpgrade: boolean = false;
  constructor(
    private kpiService: KpiService,
    private baseService: BaseService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    let endDate = new Date();
    let startDate = this.getStartDay(endDate);

    this.enterFrom=startDate.toISOString();
    this.enterTo=endDate.toISOString();
    this.page=1;
    this.size=20
    this.getAllKPI();
    this.getSP();
    this.getBuuCuc();
  }

  upgraded() {
    this.checkUpgrade = !this.checkUpgrade;
  }

  onsearch(){
    this.page=1;
    this.size=20
    this.getAllKPI();
  }

  getAllKPI() {
    this.baseService.showLoading(true);
    this.kpiService
      .getAllListKPI(this.page-1,this.size,this.enterFrom,this.enterTo,this.keyword,this.postId,this.spId,this.status)
      .subscribe((data: any) => {
        if (data.error == 0) {
          this.baseService.showLoading(false);
          this.responseProcess(data);
        }
      });
  }

  responseProcess(data: any) {
    this.listOfData = [];
    this.total = data.pagination.total;
    data.data.forEach((element) => {
      let item = new KPI(element)
      this.listOfData.push(item);
    });
  }

  pageChange(event) {
    this.page = event;
    this.getAllKPI();
  }

  onQueryParamsChange(params): void {
     const { pageSize, pageIndex } = params;
    this.page=pageIndex;
    this.size=pageSize;
    this.getAllKPI();
  }

  getStartDay(date: Date): Date {
    let d: Date = new Date(date.getTime());
    d.setHours(0, 0, 0, 0);
    return d;
  }


  searchKeyWord() {
    this.page=1;
    this.size=20;
    this.getAllKPI()
  }

  filterSelect($event) {
    this.page=1;
    this.size=20;
    let arraydate = $event.split('/');
    this.enterFrom = arraydate[0];
    this.enterTo = arraydate[1];
    this.getAllKPI();
  }

  searchBC: string;

  getBuuCuc() {
    fetch('/assets/dm_tinh.json')
    .then((res) => res.json())
    .then((data) => {
        this.responseProcessBuuCuc(data);
    });
  }

  responseProcessBuuCuc(data: any) {

    if(data){

      this.checkpost=true;
    if (this.listOfProvice == []) {
      data.forEach((elem)=>{
        let item= new Tinh(elem);
        this.listOfProvice.push(item);
      })

    } else {
      data.forEach((elem)=>{
        let item= new Tinh(elem);
        this.listOfProvice.push(item);
      })

    }
  }else{
    this.checkpost=false;
  }
  }

  getSP() {
    fetch('/assets/danh_muc.json')
    .then((res) => res.json())
    .then((data) => {
        this.responseProcessSP(data);
    });
  }



  responseProcessSP(data: any) {
    if(data){

      this.checkpost=true;
    if (this.listOfSP == []) {
      data.forEach((elem)=>{
        let item= new SP(elem);
        this.listOfSP.push(item);
      })

    } else {
      data.forEach((elem)=>{
        let item= new SP(elem);
        this.listOfSP.push(item);
      })

    }
  }else{
    this.checkpost=false;
  }
  }


  pageLocker: number = 0;
  sizeLocker: number = 20;
  totalLocker: number = 0;
  isLoadingLockerScroll: boolean = false;
  listOfLocker: any[] = [];
  lockerId: number;



  listOfSP: SP[] = [];
  spId: string;



  searchStatus(event) {
 /*    this.status = event;
    this.getAllTransaction(); */
  }
  searchLockerSize(event) {
   /*  this.lockersize = event;
    this.getAllTransaction(); */
  }

  jouneychange(event){
    this.page=1;
    this.size=20;
    this.status=event;
    this.getAllKPI();
  }

  postchange(event){
    this.page=1;
    this.size=20;
    this.postId=event;
    this.getAllKPI();
  }

  spchange(event){
    this.page=1;
    this.size=20;
    this.spId=event;
    this.getAllKPI();
  }


}

