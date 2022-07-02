export class PostOffice{
  mabc:string;
  tenbc:string;
  constructor(obj:any){
    this.parse(obj);
  }

  parse(obj:any){
    this.mabc=obj.mabc;
    this.tenbc=obj.tenbc;
  }
}


