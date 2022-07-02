import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'common';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ChartComponent,
} from 'ng-apexcharts';
import { Tinh } from '../../kpi-segment/models/tinh.model';
import { SP } from '../../kpi/sp.model';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  width:any;
};

export type chartOptionsSegmentOverall = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-kpi-segment',
  templateUrl: './kpi-segment.component.html',
  styleUrls: ['./kpi-segment.component.css'],
})
export class KPISegmentComponent implements OnInit,OnDestroy {
  enterFrom: string;
  enterTo: string;
  categoriesOrder: number;
  categoriesService: number;
  journey: string;
  listOfJourney: any[];
  checkdataa: boolean = false;

  status: string;
  listOfProvice: Tinh[] = [];
  postId: string;
  isLoadingScroll: boolean = false;
  listOfProviceMan: any[] = [];
  lockersize: number;
  postmanId: string;
  isLoadingPostmanScroll: boolean = false;
  checkpost: boolean = false;
  spId: string;

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> = {};
  /*   cfr: any;
  chartsContainer: any; */

  @ViewChild('chartoverallFM') chartOverallFM: ChartComponent;
  public chartOptionsSegmentOverallFM: Partial<chartOptionsSegmentOverall>;
  @ViewChild('chartoverallMM') chartOverallMM: ChartComponent;
  public chartOptionsSegmentOverallMM: Partial<chartOptionsSegmentOverall>;
  @ViewChild('chartoverallLM') chartOverallLM: ChartComponent;
  public chartOptionsSegmentOverallLM: Partial<chartOptionsSegmentOverall>;

  constructor(private elementRef: ElementRef) {

    this.chartOptions = {
      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
        {
          name: 'series3',
          data: [111, 62, 53, 51, 52, 159, 81],
        },
      ],
      chart: {
        height: 760,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    };
    this.chartOptionsSegmentOverallFM = {
      series: [60],
      chart: {
        height: 250,
        type: 'radialBar',
      },
      colors: ['#e12828'],
      labels: [''],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%',
          },
        },
      },
    };

    this.chartOptionsSegmentOverallMM = {
      series: [60],
      chart: {
        height: 250,
        type: 'radialBar',
      },
      colors: ['#e12828'],
      labels: [''],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%',
          },
        },
      },
    };

    this.chartOptionsSegmentOverallLM = {
      series: [60],
      chart: {
        height: 250,
        type: 'radialBar',
      },
      colors: ['#e12828'],
      labels: [''],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%',
          },
        },
      },
    };
  }

  public generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  getStartDay(date: Date): Date {
    let d: Date = new Date(date.getTime());
    d.setHours(0, 0, 0, 0);
    return d;
  }

  getMonday(d: Date) {
    let cloneD: Date = new Date(d.getTime());
    let day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    let newD: Date = new Date(cloneD.setDate(diff));
    return this.getStartDay(newD);
  }

  getLast7Days(d: Date) {
    let cloneD: Date = new Date(d.getTime());
    let day = d.getDay(),
      diff = d.getDate() - 5; // adjust when day is sunday
    let newD: Date = new Date(cloneD.setDate(diff));
    return this.getStartDay(newD);
  }

  filterSelect($event) {
    let arraydate = $event.split('/');
    this.enterFrom = arraydate[0];
    this.enterTo = arraydate[1];
    this.getData();
  }
  ngOnInit(): void {
    let endDate = new Date();
    let startDate = this.getLast7Days(endDate);

    this.enterFrom = startDate.toISOString();
    this.enterTo = endDate.toISOString();

    this.getData();
    this.getSP();
    this.getBuuCuc();
  }

  getData() {
    /*  this.chartService.getDataChart(
      this.enterFrom,
      this.enterTo,
      this.postId,
      this.spId,
      this.status
    ).subscribe((data:any)=>{

      if(data.error==0){
        this.checkdataa=true;
        this.chartOptionsSegment = {
          series: [

            {
              name: data.data.items[1].name,
              type: data.data.items[1].type,
              data: data.data.items[1].data,
              color:'#db7171',

            },
            {
              name: data.data.items[2].name,
              type: data.data.items[2].type,
              data: data.data.items[2].data,
              color:'#c960f5'
            },
            {
              name: data.data.items[0].name,
              type: data.data.items[0].type,
              data: data.data.items[0].data,
              color:'#e12828',
            },

          ],
          chart: {
            height: 550,
            type: "line",
            stacked: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [1, 1, 2]
          },
          title: {
            align: "left",
            offsetX: 110
          },
          xaxis: {
            categories: data.data.categories
          },
          plotOptions: {
            bar: {
              columnWidth: '15px'
            }
          },
          yaxis: [
            {
              axisTicks: {
                show: true
              },
              axisBorder: {
                show: true,
                color: "#db7171"
              },
              labels: {
                style: {
                  colors: "#db7171"
                },
                formatter: (value) => {

                let val: string | number = Math.abs(value).toFixed(0);


                  return  val
                },
              },
              tooltip: {
                enabled: true
              }

            },
            {
              seriesName: data.data.items[2].name,
              opposite: true,
              axisTicks: {
                show: false
              },
              axisBorder: {
                show: false,
                color: "#c960f5"
              },
              labels: {
                style: {
                  colors: "#c960f5"
                },
                formatter: (value) => {

                let val: string | number = Math.abs(value*100).toFixed(2);


                  return  val + '%'
                },
              },
              title: {
                style: {
                  color: "#c960f5"
                }
              }
            }
          ],
          tooltip: {
            fixed: {
              enabled: true,
              position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
              offsetY: 30,
              offsetX: 60
            }
          },
          legend: {
            horizontalAlign: "left",
            offsetX: 40
          }
        };


      }else{
        this.checkdataa=false;
      }
    },(er:any)=>{
      console.log('khong lay dc data',er)
    }) */
  }

  getBuuCuc() {
    fetch('/assets/dm_tinh.json')
      .then((res) => res.json())
      .then((data) => {
        this.responseProcessBuuCuc(data);
      });
  }

  responseProcessBuuCuc(data: any) {
    if (data) {
      this.checkpost = true;
      if (this.listOfProvice == []) {
        data.forEach((elem) => {
          let item = new Tinh(elem);
          this.listOfProvice.push(item);
        });
      } else {
        data.forEach((elem) => {
          let item = new Tinh(elem);
          this.listOfProvice.push(item);
        });
      }
    } else {
      this.checkpost = false;
    }
  }

  listOfSP: SP[] = [];

  getSP() {
    fetch('/assets/danh_muc.json')
      .then((res) => res.json())
      .then((data) => {
        this.responseProcessSP(data);
      });
  }

  responseProcessSP(data: any) {
    if (data) {
      this.checkpost = true;
      if (this.listOfSP == []) {
        data.forEach((elem) => {
          let item = new SP(elem);
          this.listOfSP.push(item);
        });
      } else {
        data.forEach((elem) => {
          let item = new SP(elem);
          this.listOfSP.push(item);
        });
      }
    } else {
      this.checkpost = false;
    }
  }

  jouneychange(event) {
    this.status = event;
    this.getData();
  }

  postchange(event) {
    this.postId = event;
    this.getData();
  }

  Spchange(event) {
    this.spId = event;
    this.getData();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    /* this.chart.destroy();
    this.elementRef.nativeElement.remove(); */
  }
}
