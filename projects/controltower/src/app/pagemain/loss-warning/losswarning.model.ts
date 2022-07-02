export class LossWarning{
  bcHienTai: string;
  loaiDon:string;
  maDichVu: string;
  maKhachHang: string;
  maPhieuGui: string;
  ngayNhapMay: string;
  trangThai: number

  constructor(obj:any){
    this.parse(obj);
  }

  parse(obj:any){
    this.bcHienTai=obj.bcHienTai;
    this.loaiDon=obj.loaiDon;
    this.maDichVu=obj.maDichVu;
    this.maKhachHang=obj.maKhachHang;
    this.maPhieuGui=obj.maPhieuGui;
    this.ngayNhapMay=obj.ngayNhapMay;
    this.trangThai=obj.trangThai;
  }
}

export class Labels{
    canVungBay: number;
    canVungBo: number;
    lienVungBay: number;
    lienVungBo: number;
    noiTinh: number;
    noiVung: number;
    tongDon: number;
    constructor(obj:any){
      this.parse(obj);
    }

    parse(obj:any){
      this.canVungBay=obj.canVungBay;
      this.canVungBo=obj.canVungBo;
      this.lienVungBay=obj.lienVungBay;
      this.lienVungBo=obj.lienVungBo;
      this.noiTinh=obj.noiTinh;
      this.noiVung=obj.noiVung;
      this.tongDon=obj.tongDon;
    }
    }
