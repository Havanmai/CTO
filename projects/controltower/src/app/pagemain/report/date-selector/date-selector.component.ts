import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseService, Constants } from 'common';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css']
})
export class DateSelectorComponent implements OnInit {

  selectText: string = '';
  curentSelect: number = 7;
  startDate: Date;
  endDate: Date;

  rangeDate = null;

  listOptions: string[] = [
    'Ngày hôm nay',
    'Ngày hôm qua',
    '',
    '7 ngày gần nhất',
    'Tháng này',
  ];
  customMode: boolean = false;
  isvisible: boolean = false;

  @Output() onSelect = new EventEmitter<string>();
  @Input() defaultSelect: number;

  constructor(private baseService:BaseService) {}

  ngOnInit(): void {
    if (this.defaultSelect) this.curentSelect = this.defaultSelect;
    this.selectText = this.listOptions[this.curentSelect];
    let today=new Date();
      this.startDate=this.getMonday(today);
      this.endDate=today;
  }

  selectOption(index: number) {
    this.curentSelect = index;
    this.selectText = this.listOptions[index];
    this.isvisible = false;
    switch (index) {
      case 0:
        this.endDate = new Date();
        this.startDate = this.getStartDay(this.endDate);
        break;
      case 1:
        this.endDate = new Date();
        this.startDate = this.getYesterday(this.endDate);
        this.endDate = this.getEndday(this.startDate);
        break;
      case 2:
        this.endDate = new Date();
        this.startDate = this.getMonday(this.endDate);
        break;
      case 4:
        this.endDate = new Date();
        this.startDate = this.getFirstDayOfMonth(this.endDate);
        break;
      default:
        break;
    }

    this.printRangerDay();
    this.onSelect.emit(this.buidDateString());
  }

  printRangerDay() {
     console.log(this.startDate.toLocaleString()+"-------"+this.endDate.toLocaleString());
  }

  onChange(result: Date[]): void {
    this.endDate = result[1];
    this.startDate = this.getStartDay(result[0]);
  }

  buidDateString() {

    console.log("tuần",this.getMonday(this.startDate).toISOString());
    this.startDate= this.getMonday(this.startDate);
    return this.startDate.toISOString() + '/' + this.endDate.toISOString();
  }

  customRangerClick() {
    this.customMode = true;
    this.curentSelect = 9;
  }

  onMenuChange($event) {
    this.isvisible = $event;
    if (!this.isvisible) this.customMode = false;
  }

  check:boolean=false;
  customDateSelected() {
    this.isvisible = false;

    setTimeout(() => {
      this.customMode = false;
    }, 200);
    if (this.startDate && this.endDate) {
      if(this.startDate < this.endDate){
        this.check=true;
        this.printRangerDay();
        this.selectText =
          this.startDate.getDate() +
          '/' +
          (this.startDate.getMonth() + 1) +
          '/' +
          this.startDate.getFullYear() +
          '-' +
          this.endDate.getDate() +
          '/' +
          (this.endDate.getMonth() + 1) +
          '/' +
          this.endDate.getFullYear();



        this.onSelect.emit(this.buidDateString());
      }
      else{
        this.check=false;
        this.baseService.showToast("Vui lòng chọn thời gian bắt đầu lớn hơn thời gian kết thúc",Constants.TOAST_WARNING)
      }

    }
    else{
      this.baseService.showToast('Vui lòng chọn thời gian bắt đầu và thời gian kết thúc lọc',Constants.TOAST_WARNING);
    }
  }

  cancelDateSelect() {
    this.check=false;
    this.isvisible = false;
    setTimeout(() => {
      this.customMode = false;
    }, 200);
  }

  getStartDay(date: Date): Date {
    let d: Date = new Date(date.getTime());
    d.setHours(0, 0, 0, 0);
    return d;
  }

  getEndday(date: Date) {
    let d: Date = new Date(date.getTime());
    d.setHours(23, 59, 59, 0);
    return d;
  }

  getYesterday(d: Date) {
    let day = d.getDay(),
      diff = d.getDate() - 1;
    let newD: Date = new Date(d.setDate(diff));
    return this.getStartDay(newD);
  }
  getMonday(d: Date) {
    let cloneD: Date = new Date(d.getTime());
    let day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    let newD: Date = new Date(cloneD.setDate(diff));
    return this.getStartDay(newD);
  }

  getFirstDayOfMonth(d: Date) {
    let cloneD: Date = new Date(d.getTime());
    let newD: Date = new Date(cloneD.setDate(1));
    return this.getStartDay(newD);
  }

  getFirstDayOFYear(d: Date) {
    let day: Date = new Date(d.getFullYear(), 0, 1);
    return this.getStartDay(day);
  }

  getFirstDayOfQuard(d: Date) {
    let quarter = Math.floor((d.getMonth() + 3) / 3);
    let nextq: Date;
    switch (quarter) {
      case 1:
        nextq = new Date(d.getFullYear(), 0, 1);
        break;
      case 2:
        nextq = new Date(d.getFullYear(), 3, 1);
        break;
      case 3:
        nextq = new Date(d.getFullYear(), 6, 1);
        break;
      case 4:
        nextq = new Date(d.getFullYear(), 9, 1);
        break;
      default:
        nextq = new Date(d.getFullYear(), 0, 1);
        break;
    }

    return this.getStartDay(nextq);
  }
}
