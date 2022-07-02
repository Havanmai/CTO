import { Component, OnInit } from '@angular/core';
import { BaseService, Constants } from 'common';
import { ExcelService } from '../report-quantity/excel.service';
import { LossWarningService } from './loss-warning.service';
import { LossWarning } from './losswarning.model';
import { Status } from './status.model';

@Component({
  selector: 'app-loss-warning',
  templateUrl: './loss-warning.component.html',
  styleUrls: ['./loss-warning.component.css']
})
export class LossWarningComponent implements OnInit {

  listOfData:LossWarning[];
  total:number=0;
  page:number;
  size:number;
  unitId:string;
  enterFrom:string;
  enterTo:string;

  canVungBay: number=0;
  canVungBo: number=0;
  lienVungBay: number=0;
  lienVungBo: number=0;
  noiTinh: number=0;
  noiVung: number=0;
  tongDon: number=0;

  filterSelect($event) {
    let arraydate = $event.split('/');
    this.enterFrom = arraydate[0];
    this.enterTo = arraydate[1];
  }



  status:number;
  statusChange(event){
  this.status=event;

  }


  pageChange(event) {
    this.page = event;
    this.getData();
  }

  onQueryParamsChange(params): void {
     const { pageSize, pageIndex } = params;
    this.page=pageIndex;
    this.size=pageSize;
    this.getData();
  }
  codeKH:string;
  searchKeyWordKH(){
    this.getData();
    this.getDataLable();
  }


  constructor(private losswarning:LossWarningService, private baseService:BaseService, private excelService:ExcelService) { }

  ngOnInit(): void {
    this.page=1;
    this.size=20;
    this.getData();
    this.getDataLable();
    this.getStatus();
  }

  search(){
    this.page=1;
    this.size=20;
    this.getData();
    this.getDataLable();
  }

  getData(){
    this.losswarning.getData(this.page-1,this.size,this.codeKH,this.status,this.enterFrom,this.enterTo).subscribe((data:any)=>{
      if(data.error==0){
        console.log(data)
        this.responseProcess(data);
      }
    })
  }

  responseProcess(data:any){
    this.listOfData=[];
    this.total = data.pagination.total;
    if(data.data!=null){
      data.data.forEach((element) => {
      let item = new LossWarning(element)
      this.listOfData.push(item);
    });
    }
  }
    getDataLable(){
      this.losswarning.getDataLable(this.codeKH,this.status,this.enterFrom,this.enterTo).subscribe((data:any)=>{
        if(data.error==0){
          this.canVungBay=data.data.canVungBay;
          this.canVungBo=data.data.canVungBo;
          this.lienVungBay=data.data.lienVungBay;
          this.lienVungBo=data.data.lienVungBo;
          this.noiTinh=data.data.noiTinh;
          this.noiVung=data.data.noiVung;
          this.tongDon=data.data.tongDon;
        }
      })
    }

  exportAsXLSX():void {
    if(this.listOfData){
      this.excelService.exportAsExcelFile(this.listOfData, 'sample');
    }else{
      this.baseService.showToast("Danh sách rỗng",Constants.TOAST_WARNING)
    }

  }

  listOfStatus: Status[] = [];
  tinhId: string;
  getStatus() {
    fetch('/assets/dm_trangthai.json')
    .then((res) => res.json())
    .then((data) => {
        this.responseProcessStatus(data);
    });
  }

  responseProcessStatus(data: any) {
  if(data){

  if (this.listOfStatus == []) {
    data.forEach((elem)=>{
      let item= new Status(elem);
      this.listOfStatus.push(item);
    })

  } else {
    data.forEach((elem)=>{
      let item= new Status(elem);
      this.listOfStatus.push(item);
    })

  }
  }
  }



}
