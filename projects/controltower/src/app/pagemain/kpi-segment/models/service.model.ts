export class Servive{
  maDichVu: string;
  tenDichVu: string;
  constructor(obj:any){
    this.parse(obj);
  }

  parse(obj:any){
    this.maDichVu=obj.maDichVu;
    this.tenDichVu=obj.tenDichVu;
  }
}
