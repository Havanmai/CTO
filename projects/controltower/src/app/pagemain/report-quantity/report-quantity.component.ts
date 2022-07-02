import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-quantity',
  templateUrl: './report-quantity.component.html',
  styleUrls: ['./report-quantity.component.css']
})
export class ReportQuantityComponent implements OnInit {

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


  constructor() { }

  ngOnInit(): void {
  }


}
