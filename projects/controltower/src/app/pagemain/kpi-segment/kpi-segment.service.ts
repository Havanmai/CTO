import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KpiSegmentService {

  constructor(private http:HttpClient) { }

  getAllListKPI(page:number=0,size:number=20,startDate:string,endDate:string,maphieu:string='',dichvu:string='',buucucRC:string='',buucucSE:string='',chinhanhRC:string='',chinhanhSE:string='',loaidon:string='',makh:string) {
    let url='api/v1/ctw/kpi-phan-doan?pageNumber='+page+'&pageSize='+size+'&sort=fmTgNhapDt&sort=desc';

    let json={
      "startDate": startDate,
      "endDate": endDate,
      "filter": {
        "MA_PHIEU_GUI": maphieu,
        "MA_DICH_VU": dichvu,
        "MA_DOI_TAC": '',
        "BC_NHAN": buucucRC,
        "CN_NHAN": chinhanhRC,
        "BC_GIAO": buucucSE,
        "CN_GIAO": chinhanhSE,
        "LOAI_DON": loaidon,
        "MA_KHACH_HANG":makh
      }

    }
    console.log("danh sách list KPi",json)
    return this.http.post(url,JSON.stringify(json));
  }

  getRatio(startDate:string,endDate:string,maphieu:string='',dichvu:string='',buucucRC:string='',buucucSE:string='',chinhanhRC:string='',chinhanhSE:string='',loaidon:string='',makh:string) {
    let url='api/v1/ctw/kpi-phan-doan-ty-le';

    let json={
      "startDate": startDate,
      "endDate": endDate,
      "filter": {
        "MA_PHIEU_GUI": maphieu,
        "MA_DICH_VU": dichvu,
        "MA_DOI_TAC": '',
        "BC_NHAN": buucucRC,
        "CN_NHAN": chinhanhRC,
        "BC_GIAO": buucucSE,
        "CN_GIAO": chinhanhSE,
        "LOAI_DON": loaidon,
        "MA_KHACH_HANG":makh
      }

    }
    return this.http.post(url,JSON.stringify(json));
  }

  getListDichVu(){
    return this.http.get('api/v1/ctw/bg_dichvu');
  }

  getListBuuCuc(){
    return this.http.get('api/v1/ctw/dm_buucuc');
  }


 /*  getListChiNhanh(){
    return this.http.get('/api/v1/ctw/dm_tinh');
  } */

  getListTinh(){
    return this.http.get('api/v1/ctw/dm_tinh');
  }

  getListPhuuongXa(){
    return this.http.get('api/v1/ctw/dm_phuongxa');
  }

}
