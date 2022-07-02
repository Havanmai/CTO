import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'common';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexNonAxisChartSeries, ApexPlotOptions, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { Tinh } from '../../kpi-segment/models/tinh.model';
import { SP } from '../../kpi/sp.model';
import { ReportChartService } from '../report-chart.service';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  markers: any; //ApexMarkers;
  stroke: any; //ApexStroke;
  yaxis: ApexYAxis | ApexYAxis[];
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
};


export type chartOptionsOverall = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-kpi-overall',
  templateUrl: './kpi-overall.component.html',
  styleUrls: ['./kpi-overall.component.css']
})
export class KPIOverallComponent implements OnInit,OnDestroy {

  enterFrom: string;
  enterTo: string;
  categoriesOrder:number;
  categoriesService:number;
  journey:string;
  listOfJourney:any[];
  checkdataa:boolean=false;

  status: string;
  listOfProvice: Tinh[] = [];
  postId: string;
  isLoadingScroll: boolean = false;
  listOfProviceMan: any[] = [];
  lockersize: number;
  postmanId: string;
  isLoadingPostmanScroll: boolean = false;
  checkpost:boolean=false;
  spId:string;


  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
/*   cfr: any;
  chartsContainer: any; */

  @ViewChild("chartoverall") chartOverall: ChartComponent;
  public chartOptionsOverall: Partial<chartOptionsOverall>;

  constructor(
    private chartService: ReportChartService,
    private elementRef: ElementRef
  ) {
    this.chartOptionsOverall = {
      series: [60],
      chart: {
        height: 450,
        type: "radialBar"
      },
      colors: ["#e12828"],
      labels: [""],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "60%"
          }
        }
      },

    };

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

    this.enterFrom=startDate.toISOString();
    this.enterTo=endDate.toISOString();

    this.getData();
    this.getSP();
    this.getBuuCuc();
  }

  getData(){
    this.chartService.getDataChart(
      this.enterFrom,
      this.enterTo,
      this.postId,
      this.spId,
      this.status
    ).subscribe((data:any)=>{

      if(data.error==0){
        this.checkdataa=true;
        this.chartOptions = {
          series: [

            {
              name: data.data.items[1].name,
              type: data.data.items[1].type,
              data: data.data.items[1].data,
              color:'#c3c3c3',

            },
            {
              name: data.data.items[2].name,
              type: 'area',
              data: data.data.items[2].data,
              color:'#2CB67D'
            },
            {
              name: data.data.items[0].name,
              type: data.data.items[0].type,
              data: data.data.items[0].data,
              color:'#EE0033',
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
            width: [5, 2, 5],
            curve: "smooth",

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
              columnWidth: '10px',
              borderRadius: 2
            }
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 0.01,
              inverseColors: true,
              opacityFrom: 0.45,
              opacityTo: 0.05,
              stops: [0, 100, 100, 100]
            }
            /* opacity: [0.85, 0.25, 1],
            gradient: {
              inverseColors: false,
              shade: "light",
              type: "vertical",
              opacityFrom: 0.4,
              opacityTo: 0.9,
              stops: [0, 100, 100, 100]
            } */
            /* type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.3,
              opacityTo: 0.2,
              stops: [0, 100]
            } */
          },
          yaxis: [
            {
              axisTicks: {
                show: true,
                color: "#c3c3c3",
              },
              axisBorder: {
                show: true,
                color: "#c3c3c3",
              },
              labels: {
                style: {
                  colors: "#c3c3c3"
                },
                formatter: (value) => {

                let val: string | number = Math.abs(value).toFixed(0);


                  return  val
                },
              },
              tooltip: {
                enabled: true,
              },


            },
            {
              seriesName: data.data.items[2].name,
              opposite: true,
              axisTicks: {
                show: false
              },
              axisBorder: {
                show: false,
                color: "#2CB67D",

              },
              labels: {
                style: {
                  colors: "#c3c3c3"
                },
                formatter: (value) => {

                let val: string | number = Math.abs(value*100).toFixed(2);


                  return  val + '%'
                },
              },
              title: {
                style: {
                  color: "#2CB67D"
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
    })

  }

  getBuuCuc() {
    fetch('/assets/dm_tinh.json')
    .then((res) => res.json())
    .then((data) => {
        this.responseProcessBuuCuc(data);
    });
  }

  responseProcessBuuCuc(data: any) {
    if(data){

      this.checkpost=true;
    if (this.listOfProvice == []) {
      data.forEach((elem)=>{
        let item= new Tinh(elem);
        this.listOfProvice.push(item);
      })

    } else {
      data.forEach((elem)=>{
        let item= new Tinh(elem);
        this.listOfProvice.push(item);
      })

    }
  }else{
    this.checkpost=false;
  }
  }

  listOfSP:SP[]=[];

  getSP() {
    fetch('/assets/danh_muc.json')
    .then((res) => res.json())
    .then((data) => {
        this.responseProcessSP(data);
    });
  }



  responseProcessSP(data: any) {
    if(data){

      this.checkpost=true;
    if (this.listOfSP == []) {
      data.forEach((elem)=>{
        let item= new SP(elem);
        this.listOfSP.push(item);
      })

    } else {
      data.forEach((elem)=>{
        let item= new SP(elem);
        this.listOfSP.push(item);
      })

    }
  }else{
    this.checkpost=false;
  }
  }

  jouneychange(event){
    this.status=event;
    this.getData();
  }

  postchange(event){

    this.postId=event;
    this.getData();
  }

  Spchange(event){
    this.spId=event;
    this.getData();
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
   /*  this.chart.destroy();
    this.elementRef.nativeElement.remove() */
  }
}

