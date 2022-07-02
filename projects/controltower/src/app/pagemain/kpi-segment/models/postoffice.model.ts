export class PostOffice{
  deptCode: string;
  tenBuuCuc: string;
  maTinh: string;
  capBuuCuc: number;
  dienThoai: string;
  maTtQuanLy: string;
  suDung: number;
  viewReport: number;
  maNuoc: string;
  x: number;
  y: number;
  chiNhanh: string;
  vung: string;
  nhomKhoan: string;
  maBuuCuc: string;
  idBuuCuc: number;
  ngayNm: string
  constructor(obj:any){
    this.parse(obj);
  }

  parse(obj:any){
    this.deptCode=obj.deptCode;
    this.tenBuuCuc=obj.tenBuuCuc;
    this.maTinh=obj.maTinh;;
    this.capBuuCuc=obj.capBuuCuc;
    this.dienThoai=obj.dienThoai;
    this.maTtQuanLy=obj.maTtQuanLy;
    this.suDung=obj.suDung;
    this.viewReport=obj.viewReport;
    this.maNuoc=obj.maNuoc;
    this.x=obj.x;
    this.y=obj.y;
    this.chiNhanh=obj.chiNhanh;
    this.vung=obj.vung;
    this.nhomKhoan=obj.nhomKhoan;
    this.maBuuCuc=obj.maBuuCuc;
    this.idBuuCuc=obj.idBuuCuc;
    this.ngayNm=obj.ngayNm;
  }
}
