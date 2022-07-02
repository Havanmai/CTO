import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseService } from '../base.service';
import { Location } from '@angular/common';

@Component({
  selector: 'lib-proccessingpage',
  templateUrl: './proccessingpage.component.html',
  styleUrls: ['./proccessingpage.component.css']
})
export class ProccessingpageComponent implements OnInit {

  @Input() title: string;
  @Input() header: boolean = true;
  @Input() close: boolean = true;
  @Input() backToTop: boolean = true;
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  isCollapsed: boolean = false;

  constructor(private baseService: BaseService, private location: Location) {
    this.isCollapsed = this.baseService.isCollapsed;
    this.baseService.menuCollapsed$.subscribe((data: boolean) => {
      this.isCollapsed = data;
    });
  }

  ngOnInit(): void {}

  closeClick() {
    this.location.back();
    this.onClose.emit();
  }
}
