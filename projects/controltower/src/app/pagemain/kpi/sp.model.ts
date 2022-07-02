export class SP{
  mabc:string;
  tenbc:string;
  constructor(obj:any){
    this.parse(obj);
  }

  parse(obj:any){
    this.mabc=obj.key;
    this.tenbc=obj.value;
  }
}
