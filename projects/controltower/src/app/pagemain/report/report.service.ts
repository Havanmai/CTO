import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { }

  getDataChartSales(startDate:string,endDate:string,reportType:string,thiTruong:string,nhom:string,doituongKH:string){
    let json={
      "thiTruong": thiTruong,
      "nhom": nhom,
      "doituongKH": doituongKH,
      "startDate": startDate,
      "endDate": endDate,
      "reportType": reportType
  }
  return this.http.post('/api/v1/ctw/bieu-do-cot-doanh-thu',JSON.stringify(json));
  }

  getDataChartSalesCompare(startDate:string,endDate:string,reportType:string,thiTruong:string,nhom:string,doituongKH:string){
    let json={
      "thiTruong": thiTruong,
      "nhom": nhom,
      "doituongKH": doituongKH,
      "startDate": startDate,
      "endDate": endDate,
      "reportType": reportType
  }
  return this.http.post('/api/v1/ctw/ss-doanh-thu-cung-ki',JSON.stringify(json));
  }
}
