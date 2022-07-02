import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'common';
import { PostOffice } from '../kpi/buucuc.model';
import { SP } from '../kpi/sp.model';
import { KpiSegmentService } from './kpi-segment.service';
import { Ratio } from './models/ratio.model';


import { Segment } from './models/segment.model';
import { Tinh } from './models/tinh.model';

@Component({
  selector: 'app-kpi-segment',
  templateUrl: './kpi-segment.component.html',
  styleUrls: ['./kpi-segment.component.css']
})
export class KPISegmentComponent implements OnInit {

  listOfData: any[] = [];
  page: number;
  size: number;
  total: number;
  keyword: string;
  status: string;
  enterFrom: string;
  enterTo: string;
  listOfPost: PostOffice[] = [];
  postRCId: string;
  postSEId: string;
  chinhanhRCId:string;
  chinhanhSEId:string;
    isLoadingScroll: boolean = false;
    serviceId:string;
  listOfPostMan: any[] = [];
  lockersize: number;
  postmanId: string;
  isLoadingPostmanScroll: boolean = false;
  checkpost:boolean=false;
  loaidonId:string;
  codeKH:string;
  clickDetail: boolean = false;
  checkUpgrade: boolean = false;
  constructor(
    private kpiSegmentService: KpiSegmentService,
    private baseService: BaseService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.baseService.showLoading(true);
    let endDate = new Date();
    let startDate = this.getStartDay(endDate);

    this.enterFrom=startDate.toISOString();
    this.enterTo=endDate.toISOString();
    this.page=1;
    this.size=20
    this.getAllKPISegment();
    this.getRatio();
    this.getTinh();
    this.getBuuCuc();
    this.getSP();
  }

  upgraded() {
    this.checkUpgrade = !this.checkUpgrade;
  }


  onChange(result: Date[]): void {
    console.log('From: ', result[0], ', to: ', result[1]);
    this.page=1;
    this.size=20;
    this.enterFrom = result[0].toISOString();
    this.enterTo = result[1].toISOString();
    this.getAllKPISegment();
    this.getRatio();
  }

  getAllKPISegment() {
    this.kpiSegmentService
      .getAllListKPI(this.page-1,this.size,this.enterFrom,this.enterTo,this.keyword,this.serviceId,this.postRCId,this.postSEId,this.chinhanhRCId,this.chinhanhSEId,this.loaidonId,this.codeKH)
      .subscribe((data: any) => {
        if (data.error == 0) {
          this.responseProcess(data);
        }
      });
  }

  responseProcess(data: any) {
    this.listOfData = [];
    this.total = data.pagination.total;
    data.data.forEach((element) => {
      let item = new Segment(element)
      this.listOfData.push(item);
    });
    this.baseService.showLoading(false);
  }

  getRatio() {
    this.kpiSegmentService
      .getRatio(this.enterFrom,this.enterTo,this.keyword,this.serviceId,this.postRCId,this.postSEId,this.chinhanhRCId,this.chinhanhSEId,this.loaidonId,this.codeKH)
      .subscribe((data: any) => {
        if (data.error == 0) {
          this.responseProcessRatio(data);
        }
      });
  }

  ratio:Ratio;
  responseProcessRatio(data: any) {
    if(data.data!=null){
      this.ratio = new Ratio(data.data);
    }
  }

  pageChange(event) {
    this.page = event;
    this.getAllKPISegment();
    this.getRatio();
  }

  onQueryParamsChange(params): void {
     const { pageSize, pageIndex } = params;
    this.page=pageIndex;
    this.size=pageSize;
    this.getAllKPISegment();
    this.getRatio();
  }

  getStartDay(date: Date): Date {
    let d: Date = new Date(date.getTime());
    d.setHours(0, 0, 0, 0);
    return d;
  }


  searchKeyWord() {
  this.page=1;
  this.size=20;
  this.getAllKPISegment();
  }

  searchKeyWordKH(){
    this.page=1;
    this.size=20;
    this.getAllKPISegment();
  }

  filterSelect($event) {
    let arraydate = $event.split('/');
    this.enterFrom = arraydate[0];
    this.enterTo = arraydate[1];
  }

  searchBC: string;

  getBuuCuc() {
   /*  this.kpiSegmentService.getListBuuCuc().subscribe((data:any)=>{
      if(data.error==0){
        this.responseProcessBuuCuc(data);
      }
    }) */

    fetch('/assets/bucuc.json')
    .then((res) => res.json())
    .then((data) => {
        this.responseProcessBuuCuc(data);
    });
  }

  responseProcessBuuCuc(data: any) {

 /*  this.listOfPost=[];
  data.data.forEach((elem)=>{
    let item= new PostOffice(elem);
    this.listOfPost.push(item);
  }); */

  if(data){

    this.checkpost=true;
  if (this.listOfPost == []) {
    data.forEach((elem)=>{
      let item= new PostOffice(elem);
      this.listOfPost.push(item);
    })

  } else {
    data.forEach((elem)=>{
      let item= new PostOffice(elem);
      this.listOfPost.push(item);
    })

  }
}else{
  this.checkpost=false;
}
  }

  listOfTinh: Tinh[] = [];
  tinhId: string;
  getTinh() {
    /* this.kpiSegmentService.getListTinh().subscribe((data:any)=>{
      if(data.error==0){
        this.responseProcessTinh(data);
      }
    }); */
    fetch('/assets/dm_tinh.json')
    .then((res) => res.json())
    .then((data) => {
        this.responseProcessTinh(data);
    });
  }

  responseProcessTinh(data: any) {
   /*  this.listOfTinh=[];
    data.data.forEach((elem)=>{
    let item= new Tinh(elem);
    this.listOfTinh.push(item);
  }); */
  if(data){
    this.checkpost=true;
  if (this.listOfTinh == []) {
    data.forEach((elem)=>{
      let item= new Tinh(elem);
      this.listOfTinh.push(item);
    })

  } else {
    data.forEach((elem)=>{
      let item= new Tinh(elem);
      this.listOfTinh.push(item);
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







  getSP() {
    fetch('/assets/danh_muc.json')
    .then((res) => res.json())
    .then((data) => {
        this.responseProcessSP(data);
    });
  }

  listOfSP:SP[]=[];

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


  jouneychange(event){
    this.status=event;
  }

  postRCchange(event){
    this.postRCId=event;
  }

  postSEchange(event){
    this.postSEId=event;
  }
  chinhanhSEchange(event){
    this.chinhanhSEId=event;
  }
  chinhanhRCchange(event){
    this.chinhanhRCId=event;
  }
  loaidonchange(event){
    this.loaidonId=event;
  }
  servicechange(event){
    this.serviceId=event;
  }

  btnSearch(){
    this.page=1;
    this.size=20;
    this.getAllKPISegment();
    this.getRatio();
  }



}
