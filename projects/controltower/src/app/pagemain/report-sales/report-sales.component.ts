import { Component, OnInit } from '@angular/core';
import { BaseService, Constants } from 'common';
import { PostOffice } from '../kpi/buucuc.model';
import { Tinh } from '../kpi-segment/models/tinh.model';
import { ExcelService } from '../report-quantity/excel.service';

@Component({
  selector: 'app-report-sales',
  templateUrl: './report-sales.component.html',
  styleUrls: ['./report-sales.component.css']
})
export class ReportSalesComponent implements OnInit {
  listOfData:any;
  total:number;
  page:number;
  size:number;
  unitId:string;
  enterFrom:string;
  enterTo:string;

  filterSelect($event) {
    let arraydate = $event.split('/');
    this.enterFrom = arraydate[0];
    this.enterTo = arraydate[1];
  }

  region:string
  regionChange(event){

  }


  branch:string;
  branchChange(event){

  }

  post:string;
  postChange(event){

  }

  object:string;
  objectChange(event){

  }

  pageChange($event){

  }
  onQueryParamsChange($event){

  }

  codeKH:string;
  searchKeyWordKH(){}


  constructor(private excelService:ExcelService, private baseService:BaseService) { }

  ngOnInit(): void {
    this.getBuuCuc();
    this.getTinh()
  }


  exportAsXLSX():void {
    if(this.listOfData){
      this.excelService.exportAsExcelFile(this.listOfData, 'sample');
    }else{
      this.baseService.showToast("Danh sách rỗng",Constants.TOAST_WARNING)
    }

  }


  searchBC: string;
  checkpost:boolean=false;
  listOfPost:PostOffice[]=[];
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



}
