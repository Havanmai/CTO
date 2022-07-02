


export class Segment{
  maPhieuGui: string;
  maDoiTac: string;
  maDichVu: string;
  maKhachHang:string;
  loaiDon: string;
  loaiHh: string;
  trangThai: number;
  nhomDv: string;
  bcNhan: string;
  cnNhan: string;
  bcHienTai: string;
  cnHienTai: string;
  bcGiao: string;
  cnGiao: string;
  fmTgNhapDt: string;
  fmTgXuatTcBcg: string;
  fmTgThuctePhandoan: string;
  fmChenhLech: string;
  fmDanhgia: string;
  mmTgXuatTcBcg: string;
  mmTgNhapBcg: string;
  mmTgThuctePhandoan: string;
  mmChenhLech: string;
  mmDanhgia: string;
  lmTgNhapBcg: string;
  lmTgGiaoLandau: string;
  lmTgThuctePhandoan: string;
  lmChenhLech: string;
  lmDanhgia: string

  constructor(obj:any){
    this.parse(obj);
  }

  parse(obj:any){
    this.maPhieuGui=obj.maPhieuGui;
    this.maDoiTac=obj.maDoiTac;
    this.maDichVu=obj.maDichVu;
    this.maKhachHang=obj.maKhachHang;
    this.loaiDon=obj.loaiDon;
    this.loaiHh=obj.loaiHh;
    this.trangThai=obj.trangThai;
    this.nhomDv=obj.nhomDv;
    this.bcNhan=obj.bcNhan;
    this.cnNhan=obj.cnNhan;
    this.bcHienTai=obj.bcHienTai;
    this.cnHienTai=obj.cnHienTai;
    this.bcGiao=obj.bcGiao;
    this.cnGiao=obj.cnGiao;
    this.fmTgNhapDt=obj.fmTgNhapDt;
    this.fmTgXuatTcBcg=obj.fmTgXuatTcBcg;
    this.fmTgThuctePhandoan=obj.fmTgThuctePhandoan;
    this.fmChenhLech=obj.fmChenhLech;
    this.fmDanhgia=obj.fmDanhgia;
    this.mmTgXuatTcBcg=obj.mmTgXuatTcBcg;
    this.mmTgNhapBcg=obj.mmTgNhapBcg;
    this.mmTgThuctePhandoan=obj.mmTgThuctePhandoan;
    this.mmChenhLech=obj.mmChenhLech;
    this.mmDanhgia=obj.mmDanhgia;
    this.lmTgNhapBcg=obj.lmTgNhapBcg;
    this.lmTgGiaoLandau=obj.lmTgGiaoLandau;
    this.lmTgThuctePhandoan=obj.lmTgThuctePhandoan;
    this.lmChenhLech=obj.lmChenhLech;
    this.lmDanhgia=obj.lmDanhgia;
  }
}
