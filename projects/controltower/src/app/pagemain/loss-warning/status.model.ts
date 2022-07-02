export class Status{
  key:number;
  value:string;
  constructor(obj:any){
    this.parse(obj);
  }
  parse(obj:any){
    this.key=obj.key;
    this.value=obj.value;
  }
}
