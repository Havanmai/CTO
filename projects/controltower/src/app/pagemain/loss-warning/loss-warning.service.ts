import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LossWarningService {

  constructor(private http:HttpClient) { }


  getData(page:number=0,size:number=20,maKhachHang:string='',status:number,startDate:string='',endDate:string=''){
    let url='api/v1/ctw/bao-cao-mat-hang?pageNumber='+page+'&pageSize='+size;
    /* let url='api/v1/ctw/bao-cao-mat-hang'; */
    if(status){
      let json={
        "MA_KHACH_HANG": maKhachHang,
        "TRANG_THAI": status,
        "startDate": startDate,
        "endDate": endDate,
      }
      return this.http.post(url,JSON.stringify(json));
    }else{
      let json={
        "MA_KHACH_HANG": maKhachHang,
        "TRANG_THAI": '',
        "startDate": startDate,
        "endDate": endDate,
      }
      return this.http.post(url,JSON.stringify(json));
    }
  }

  getDataLable(maKhachHang:string="",status:number,startDate:string='',endDate:string=''){
    if(status){
      let json={
        "MA_KHACH_HANG": maKhachHang,
        "TRANG_THAI": '',
        "startDate": startDate,
        "endDate": endDate,
      }
      return this.http.post('api/v1/ctw/bao-cao-mat-hang-sum',JSON.stringify(json));
    }else{
      let json={
        "MA_KHACH_HANG": maKhachHang,
        "TRANG_THAI": '', "startDate": startDate,
        "endDate": endDate,
      }
      return this.http.post('api/v1/ctw/bao-cao-mat-hang-sum',JSON.stringify(json));
    }

  }
}
