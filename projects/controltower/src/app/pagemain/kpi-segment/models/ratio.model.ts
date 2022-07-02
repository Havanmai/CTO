export class Ratio{
  tyLeFm: string;
  tyLeMm: string;
  tyLeLm: string
  constructor(obj:any){
    this.parse(obj);
  }

  parse(obj:any){
    this.tyLeFm=(obj.tyLeFm).toString();
    this.tyLeMm=(obj.tyLeMm).toString();
    this.tyLeLm=(obj.tyLeLm).toString();
  }
}
