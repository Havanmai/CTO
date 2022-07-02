import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KpiService {

  constructor(private http: HttpClient) {}

  getAllListKPI(page:number=0,size:number=20,startDate:string,endDate:string,maphieu:string='',chinhanh:string='',dichvu:string='',hanhtrinh:string='') {
    let url='api/v1/ctw/kpi-toan-trinh-chi-tiet?pageNumber='+page+'&pageSize='+size;

    let json={
      "startDate": startDate,
      "endDate": endDate,
      "groupBy": "VUNG",
      "filter": {
       "MA_PHIEUGUI": maphieu,
        "CHI_NHANH": chinhanh,
        "DICH_VU": dichvu,
        "LOAI_HANH_TRINH": hanhtrinh
      }

    }
     console.log(json)
    return this.http.post(url,JSON.stringify(json));
  }
}
