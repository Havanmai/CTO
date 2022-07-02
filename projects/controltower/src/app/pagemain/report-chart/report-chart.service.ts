import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportChartService {

  constructor(private http: HttpClient) {}

  getDataChart(startDate:string,endDate:string,chinhanh:string='',dichvu:string='',LOAI_HANH_TRINH:string='') {

    let url='api/v1/ctw/kpi-toan-trinh';
    let json={
      "startDate": startDate,
      "endDate": endDate,
      "groupBy": "VUNG",
      "filter": {
        "MA_PHIEUGUI": "",
        "CHI_NHANH": chinhanh,
        "DICH_VU": dichvu,
        "LOAI_HANH_TRINH": LOAI_HANH_TRINH
      }
    }
    return this.http.post(url,JSON.stringify(json));
  }

}
