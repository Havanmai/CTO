/* export class Tinh{
  maTinh: string;
  tenTinh: string;
  maVung: number;
  suDung: number;
  maThiTruong: number;
  maNuoc: string;
  capTinh: number;
  postCode: number;
  zipCode: number;
  nhomThiTruong: number;
  constructor(obj:any){
    this.parse(obj);
  }

  parse(obj:any){
    this.maTinh=obj.maTinh;
    this.tenTinh=obj.tenTinh;
    this.maVung=obj.maVung;
    this.suDung=obj.suDung;
    this.maThiTruong=obj.maThiTruong;
    this.maNuoc=obj.maNuoc;
    this.capTinh=obj.capTinh;
    this.postCode=obj.postCode;
    this.zipCode=obj.zipCode;
    this.nhomThiTruong=obj.nhomThiTruong;
  }
} */
export class Tinh{
  key:string;
  value:string;
  constructor(obj:any){
    this.parse(obj);
  }

  parse(obj:any){
    this.key=obj.key;
    this.value=obj.value;
  }
}
