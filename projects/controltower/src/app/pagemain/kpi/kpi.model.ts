export class KPI{
      maPhieuGui: string;
      maKhGui: string;
      loaiDv: string;
      loaiHanhTrinh: string;
      loaiHh: string;
      loaiDon: string;
      bcNhan: string;
      tinhNhan: string;
      bcGiao: string;
      tinhGiao: string;
      loaiDc: string;
      khoangCachTtkt: number;
      thoiGianLayHangTc: string;
      thoiGianGiaoLanDau: string;
      thoiGianTtThucTe: string;
      thoiGianTtChiTieu: string;
      chenhLech: number;
      trangThai: number;
      ketQua: string

      constructor(obj:any){
        this.parse(obj);
      }

      parse(obj:any){
        this.maPhieuGui=obj.maPhieuGui;
        this.maKhGui=obj.maKhGui;
        this.loaiDv=obj.loaiDv;
        this.loaiHanhTrinh=obj.loaiHanhTrinh;
        this.loaiHh=obj.loaiHh;
        this.loaiDon=obj.loaiDon;
        this.bcNhan=obj.bcNhan;
        this.tinhNhan=obj.tinhNhan;
        this.bcGiao=obj.bcGiao;
        this.tinhGiao=obj.tinhGiao;
        this.loaiDc=obj.loaiDc;
        this.khoangCachTtkt=obj.khoangCachTtkt;
        this.thoiGianLayHangTc=obj.thoiGianLayHangTc;
        this.thoiGianGiaoLanDau=obj.thoiGianGiaoLanDau;
        this.thoiGianTtThucTe=obj.thoiGianTtThucTe;
        this.thoiGianTtChiTieu=obj.thoiGianTtChiTieu;
        this.chenhLech=obj.chenhLech;
        this.trangThai=obj.trangThai;
        this.ketQua=obj.ketQua;
      }
}
