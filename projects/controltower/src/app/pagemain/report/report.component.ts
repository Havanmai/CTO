import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsService } from './highcharts.service';
/* import highcharts3D from 'highcharts/highcharts-3d';
highcharts3D(Highcharts); */


declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

import Histogram from 'highcharts/modules/histogram-bellcurve';
Histogram(Highcharts);

import highcharts3D from 'highcharts/highcharts-3d';
highcharts3D(Highcharts);

import Cylinder from 'highcharts/modules/cylinder';
import { ListCategoryMart, ListMart, ListObject, ListReportType } from '../../shared/datafake/data-search-reports';
import { ReportService } from './report.service';
import { BaseService, Constants } from 'common';

Cylinder(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})



export class ReportComponent implements OnInit {
  @ViewChild('chartscolumn', {static: true}) public chartElColumn: ElementRef;
  @ViewChild('chartscolumn1', {static: true}) public chartElColumn1: ElementRef;

  @ViewChild('chartscompare', {static: true}) public chartElCompare : ElementRef;
  @ViewChild('chartscompare1', {static: true}) public chartElCompare1: ElementRef;
  @ViewChild('charts', {static: true}) public chartEl: ElementRef;
  @ViewChild('charts1', {static: true}) public chartEl1: ElementRef;
  @ViewChild('charts2', {static: true}) public chartEl2: ElementRef;
  @ViewChild('charts3', {static: true}) public chartEl3: ElementRef;
  unitId:number;
  enterFrom:string;
  enterTo:string;
  listOfReportType=ListReportType;
  listOfMart=ListMart;
  listOfCategoryMart=ListCategoryMart;
  listOfObject=ListObject;
  dates:Date[];

  filterSelect($event) {
    let arraydate = $event.split('/');
    this.enterFrom = arraydate[0];
    this.enterTo = arraydate[1];
    this.getDataQuantity();
    this.getDataSales();
    this.getDataSalesCompare();
    this.getDataQuantityCompare();
  }

  onDatePickerChange(event){

    let start=new Date(event[0]);
    let end=new Date(event[1]);
    if(event[1]){
      if((start.getMonth()+1)===(end.getMonth()+1)){
        this.enterFrom = event[0].toISOString();
        this.enterTo = event[1].toISOString();
      }else{
        let datenow= new Date();
        this.date=datenow;
        setTimeout(()=>{
          this.dates=[datenow,datenow];
        },10)
        this.baseService.showToast("Vui lòng chọn khoảng thời gian trong 1 tháng",Constants.TOAST_WARNING)
      }
    }else{
      this.enterFrom = event[0].toISOString();
      this.enterTo = event[0].toISOString();
    }

  }


  date:Date;
  onDayChange(event){
   this.date=event;
   console.log(this.date)
  }


  constructor(private highcharts: HighchartsService, private reportService:ReportService, private baseService:BaseService) { }
  ngOnInit(){
    this.unitId=1;
    let datenow= new Date();
    this.date=datenow;
    this.dates=[datenow,datenow];
    this.reportCategory="LUY_KE_NGAY";

    /* this.highcharts.createChart(this.chartElColumn1.nativeElement, this.chartsOptionColumn1); */
   /*  this.highcharts.createChart(this.chartElCompare.nativeElement, this.chartsOptionCompare);
    this.highcharts.createChart(this.chartElCompare1.nativeElement, this.chartsOptionCompare1); */
    this.highcharts.createChart(this.chartEl.nativeElement, this.chartOptions);
    this.highcharts.createChart(this.chartEl1.nativeElement, this.chartOptions1);
    this.highcharts.createChart(this.chartEl2.nativeElement, this.chartOptions2);
    this.highcharts.createChart(this.chartEl3.nativeElement, this.chartOptions3);

    /* this.getDataQuantity();
    this.getDataSales(); */
    this.getDataSalesCompare();
    this.getDataQuantityCompare();

  }




  unitChange(event){

  }

  reportCategory:string;
  reportCategoryChange(event){
    this.reportCategory=event;
    this.getDataQuantity();
    this.getDataSales();
    this.getDataSalesCompare();
    this.getDataQuantityCompare();
  }

  mart:string;
  martChange(event){
    this.mart=event;
    this.getDataQuantity();
    this.getDataSales();
    this.getDataSalesCompare();
    this.getDataQuantityCompare();
  }

  martCategory:string;
  martCategoryChange(event){
    this.martCategory=event;
    this.getDataQuantity();
    this.getDataSales();
    this.getDataSalesCompare();
    this.getDataQuantityCompare();
  }

  object:string;
  objectChange(event){
    this.object=event;
    this.getDataQuantity();
    this.getDataSales();
    this.getDataSalesCompare();
    this.getDataQuantityCompare();
  }


  getDataQuantity(){
  this.reportService.getDataChartSales(this.enterFrom,this.enterTo,this.reportCategory,this.mart,this.martCategory,this.object).subscribe((data:any)=>{

    if(data.error==0){
      switch(this.reportCategory){
       case "LUY_KE_NGAY":
        this.highcharts.createChart(this.chartElColumn.nativeElement, this.setChartColumn('Sản lượng theo ngày',data));
        break;
        case "TUAN":
          this.highcharts.createChart(this.chartElColumn.nativeElement, this.setChartColumn('Sản lượng theo tuần',data));
          break;
        case "GAN_NHAT_7_NGAY":
          this.highcharts.createChart(this.chartElColumn.nativeElement, this.setChartColumn('Sản lượng 7 ngày gần nhất',data));
          break;
      }

    }
  })
  }
  getDataSales(){
    this.reportService.getDataChartSales(this.enterFrom,this.enterTo,this.reportCategory,this.mart,this.martCategory,this.object).subscribe((data:any)=>{
      if(data.error==0){
          /* this.highcharts.createChart(this.chartElColumn1.nativeElement, this.setChartColumn('Doanh thu theo ngày',data)); */
          switch(this.reportCategory){
            case "LUY_KE_NGAY":
             this.highcharts.createChart(this.chartElColumn1.nativeElement, this.setChartColumn('Doanh thu theo ngày',data));
             break;
             case "TUAN":
               this.highcharts.createChart(this.chartElColumn1.nativeElement, this.setChartColumn('Doanh thu theo tuần',data));
               break;
             case "GAN_NHAT_7_NGAY":
               this.highcharts.createChart(this.chartElColumn1.nativeElement, this.setChartColumn('Doanh thu 7 ngày gần nhất',data));
               break;
           }

      }
    })
    }


    getDataQuantityCompare(){
      this.reportService.getDataChartSalesCompare(this.enterFrom,this.enterTo,this.reportCategory,this.mart,this.martCategory,this.object).subscribe((data:any)=>{
        if(data.error==0){
          console.log(data)
            /* this.highcharts.createChart(this.chartElColumn1.nativeElement, this.setChartColumn('Doanh thu theo ngày',data)); */
            switch(this.reportCategory){
              case "LUY_KE_NGAY":
               this.highcharts.createChart(this.chartElCompare.nativeElement, this.setChartColumn('Doanh thu theo ngày',data));
               break;
               case "TUAN":
                 this.highcharts.createChart(this.chartElCompare.nativeElement, this.setChartColumn('Doanh thu theo tuần',data));
                 break;
               case "GAN_NHAT_7_NGAY":
                 this.highcharts.createChart(this.chartElCompare.nativeElement, this.setChartColumn('Doanh thu 7 ngày gần nhất',data));
                 break;
             }

        }
      })
      }


    getDataSalesCompare(){
      this.reportService.getDataChartSalesCompare(this.enterFrom,this.enterTo,this.reportCategory,this.mart,this.martCategory,this.object).subscribe((data:any)=>{
        if(data.error==0){
            /* this.highcharts.createChart(this.chartElColumn1.nativeElement, this.setChartColumn('Doanh thu theo ngày',data)); */
            if(data.data!=null){
              switch(this.reportCategory){
                case "LUY_KE_NGAY":
                 this.highcharts.createChart(this.chartElCompare1.nativeElement, this.setChartColumCompare('So sánh cùng kỳ Doanh thu theo ngày',data));
                 break;
                 case "TUAN":
                   this.highcharts.createChart(this.chartElCompare1.nativeElement, this.setChartColumCompare('Doanh thu theo tuần',data));
                   break;
                 case "GAN_NHAT_7_NGAY":
                   this.highcharts.createChart(this.chartElCompare1.nativeElement, this.setChartColumCompare('Doanh thu 7 ngày gần nhất',data));
                   break;
               }
            }


        }
      })
      }

 /*  getDataSalesCompare(){
    this.reportService.getDataChartSales().subscribe((data:any)=>{
      if(data.error==0){
          this.highcharts.createChart(this.chartElColumn1.nativeElement, this.setChartColumn('Doanh thu theo tuần',data));
      }
    })
    }

    getDataQuantityCompare(){
      this.reportService.getDataChartSales().subscribe((data:any)=>{
        if(data.error==0){
            this.highcharts.createChart(this.chartElColumn1.nativeElement, this.setChartColumn('Doanh thu theo tuần',data));
        }
      })
      } */

  setChartColumn(title:string,data:any){
    let chart={
      chart: {
        type: 'column'
      },
      title: {
        text: title,
      },
      xAxis: {
        categories: data.data.categories,
        crosshair: true
      },
      yAxis: {
        title: {
          text: ''
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [ {
          name: data.data.items[0].name,
          type:'column',
          color: "#4172C7",
          data:  data.data.items[0].data

        }, {
          name: data.data.items[1].name,
          type:'column',
          color: "#ED7D31",
          data:  data.data.items[1].data

        }, {
          name: "Line("+ data.data.items[0].name +")",
          type:'spline',
          dashStyle: 'shortdot',
          color: "#4172C7",
          marker: {
            enabled: false
          },
          data: [[0,(data.data.items[0].data[0])],[(data.data.categories.length-1),(data.data.items[0].data[(data.data.items[0].data.length-1)])]]

        },
        {
          name:  "Line("+ data.data.items[1].name +")",
          type:"spline",
          marker: {
            enabled: false
          },
          color: "#ED7D31",
          dashStyle: 'shortdot',
          data:[[0,(data.data.items[1].data[0])],[(data.data.categories.length-1),(data.data.items[1].data[(data.data.items[1].data.length-1)])]]

        }
      ]
    }
    return chart;
  }


  setChartColumCompare(title:string,data:any){
   let chartsOptionCompare={
      chart: {
        type: 'column'
      },
      title: {
        text: title,
      },
      xAxis: {
        categories:data.data.categories,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: ''
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: data.data.items[0].name,
          type:'column',
          color: "#4172C7",
          data:  data.data.items[0].data

        }, {
          name: data.data.items[1].name,
          type:'column',
          color: "#ED7D31",
          data:  data.data.items[1].data

        },]
    }
    return chartsOptionCompare;
  }
  chartsOptionColumn={
    chart: {
      type: 'column'
    },
    title: {
      text: 'Sản lượng theo tuần'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      crosshair: true
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [ {
        name: 'New York',
        type:'column',
        color: "#4172C7",
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

      }, {
        name: 'London',
        type:'column',
        color: "#ED7D31",
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

      }, {
        name: 'Berlin',
        type:'spline',
        dashStyle: 'shortdot',
        color: "#4172C7",
        marker: {
          enabled: false
        },
        data: [[0,83.6],[11,92.3]]

      },
      {
        name: 'Japan',
        type:"spline",
        marker: {
          enabled: false
        },
        color: "#ED7D31",
        dashStyle: 'shortdot',
        data: [[0,48.9],[11,51.2]]

      }
    ]
  }

  chartsOptionColumn1={
    chart: {
      type: 'column'
    },
    title: {
      text: 'Doanh thu theo tuần'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [
       {
      name: 'New York',
      type:"column",
      color: "#4172C7",
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

      }, {
        name: 'London',
        type:"column",
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2],
        color: "#ED7D31"
      },{
        name: 'Berlin',
        type:'spline',
        dashStyle: 'shortdot',
        color: "#4172C7",
        marker: {
          enabled: false
        },
        data: [[0,83.6],[11,92.3]]

      },
      {
        name: 'Japan',
        type:"spline",
        marker: {
          enabled: false
        },
        color: "#ED7D31",
        dashStyle: 'shortdot',
        data: [[0,48.9],[11,51.2]]

      }]
  }



  chartsOptionCompare={
    chart: {
      type: 'column'
    },
    title: {
      text: 'So sánh sản lượng cùng kỳ'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [
       {
      name: 'New York',
      data: [83.6, 78.8,],
      color: "#4172C7"
      }, {
        name: 'London',
        data: [48.9, 38.8],
        color: "#ED7D31",
      }]
  }

  chartsOptionCompare1={
    chart: {
      type: 'column'
    },
    title: {
      text: 'So sánh doanh thu cùng kì'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [
       {
      name: 'New York',
      color: "#4172C7",
      data: [83.6, 78.8,]

      }, {
        name: 'London',
        color: "#ED7D31",
        data: [48.9, 38.8]

      }]
  }



  setChartOverall(title:string,data:any){
    let chartoverall={
      title: {
        text: title
      },
      chart: {
        type: 'pie',
        with:500,
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        }
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          /* dataLabels: {
            enabled: true,
            format: '{point.name}'
          } */
        }
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        /* data: [
         { name: 'Tăng',
         color: "#4170C0",
         data: 45.0},
         { name: 'Giảm',
         color: "#ED7D31",
         data: 26.8},
         { name: 'Bình thường',
         color: "#B29DA6",
         data: 12.5},
         { name: 'KPS',
         color: "#FABD00i",
         data: 15.7}


        ] */
        data: [
          ['Tăng', 45.0],
          ['Giảm', 26.8],
          ['Bình thường', 12.5],
          ['KPS', 15.7],
        ]
      }]
   };
  }

  chartOptions = {
    title: {
      text: 'Biến động sản lượng 6350KHL'
    },
    chart: {
      type: 'pie',
      with:500,
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
          enabled: true,
          format: `{point.name} ( {point.y:.1f} %) `
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Biến động sản lượng',
      data:[{
                y: 45.0,
                name: "Tăng",
                color: "#4170C0",

              }, {
                y: 26.8,
                name: "Giảm",
                color: "#EA7C31",

              }, {
                y: 12.5,
                name: "Bình thường",
                color: "#A5A4A0"
              }, {
                y: 15.7,
                name: "KPS",
                color: "#FABD00",
            }]
    }]
 };

 chartOptions1 = {
  title: {
    text: 'Biến động sản lượng KH Top 500'
  },
  chart: {
    type: 'pie',
    with:500,
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0
    }
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      depth: 35,
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }
  },
  series: [{
    type: 'pie',
    name: 'Browser share',
    data: [
      ['Firefox', 45.0],
      ['IE', 26.8],
      {
        name: 'Chrome',
        y: 12.8,
        sliced: true,
        selected: true
      },
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7]
    ]
  }]
};
chartOptions2 = {
  title: {
    text: 'Biến động doanh thu Top 6350KH'
  },
  chart: {
    type: 'pie',
    with:500,
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0
    }
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      depth: 35,
      /* dataLabels: {
        enabled: true,
        format: '{point.name}'
      } */
    }
  },
  series: [{
    type: 'pie',
    name: 'Browser share',
    data: [
      ['Firefox', 45.0],
      ['IE', 26.8],
      {
        name: 'Chrome',
        y: 12.8,
        sliced: true,
        selected: true
      },
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7]
    ]
  }]
};
chartOptions3 = {
  title: {
    text: 'Biến động doanh thu Top 500KH'
  },
  chart: {
    type: 'pie',
    with:500,
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0
    }
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      depth: 35,
      /* dataLabels: {
        enabled: true,
        format: '{point.name}'
      } */
    }
  },
  series: [{
    type: 'pie',
    name: 'Browser share',
    data: [
      ['Firefox', 45.0],
      ['IE', 26.8],
      {
        name: 'Chrome',
        y: 12.8,
        sliced: true,
        selected: true
      },
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7]
    ]
  }]
};


}
