import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from '../../api/customer';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ChartModule } from 'primeng/chart';
import { KnobModule } from 'primeng/knob';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { CarouselModule } from 'primeng/carousel';
import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';
import { TimelineModule } from 'primeng/timeline';
import { BadgeModule } from 'primeng/badge';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DropdownModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
    FormsModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    ChartModule,
    RatingModule,
    KnobModule,
    CarouselModule,
    ProgressBarModule,
    AvatarModule,
    TimelineModule,
    BadgeModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  visitorChart: any;

  visitorChartOptions: any;

  timelineEvents: any[] = [];

  countryChart: any;

  countryChartOptions: any;

  revenueChart: any;

  revenueChartOptions: any;

  customersTable: Customer[] = [];

  customersTable1: Customer[] = [];

  customersTable2: Customer[] = [];

  selectedCustomers1: Customer[] = [];

  orderYear: any;

  selectedOrderYear: any;

  revenueMonth: any;

  selectedRevenueMonth: any;

  visitorYear: any;

  selectedVisitorYear: any;

  customerYear: any;

  selectedCustomerYear: any;

  growth: any;

  avgCustomer: any;

  customerChart: any;

  customerChartOptions: any;

  customerMax: any;

  customerMin: any;

  customerAvg: any;

  subscription!: Subscription;
  customerCarousel: any[] = [];

  carouselResponsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  
  changeVisitorChart(event: any) {
    const dataSet1 = [
      [630, 630, 695, 695, 695, 760, 760, 760, 840, 840, 840, 840],
      [600, 671, 660, 665, 700, 610, 810, 790, 710, 860, 810, 780],
    ];
    const dataSet2 = [
      [580, 580, 620, 620, 620, 680, 680, 680, 730, 730, 730, 730],
      [550, 592, 600, 605, 630, 649, 660, 690, 710, 720, 730, 780],
    ];

    if (event.value.code === '1') {
      this.growth = '$581,259';
      this.avgCustomer = '$973';
      this.visitorChart.datasets[0].data = dataSet2[parseInt('0')];
      this.visitorChart.datasets[1].data = dataSet2[parseInt('1')];
    } else {
      this.growth = '$620,076';
      this.avgCustomer = '$1,120';
      this.visitorChart.datasets[0].data = dataSet1[parseInt('0')];
      this.visitorChart.datasets[1].data = dataSet1[parseInt('1')];
    }
  }

  changeRevenueChart(event: any) {
    const dataSet1 = [
      [37, 34, 21, 27, 10, 18, 15],
      [31, 27, 30, 37, 23, 29, 20],
      [21, 7, 13, 3, 19, 11, 6],
      [47, 31, 35, 20, 46, 39, 25],
    ];
    const dataSet2 = [
      [31, 27, 30, 37, 23, 29, 20],
      [47, 31, 35, 20, 46, 39, 25],
      [37, 34, 21, 27, 10, 18, 15],
      [21, 7, 13, 3, 19, 11, 6],
    ];

    if (event.value.code === '1') {
      this.revenueChart.datasets[0].data = dataSet2[parseInt('0')];
      this.revenueChart.datasets[1].data = dataSet2[parseInt('1')];
      this.revenueChart.datasets[2].data = dataSet2[parseInt('2')];
      this.revenueChart.datasets[3].data = dataSet2[parseInt('3')];
    } else {
      this.revenueChart.datasets[0].data = dataSet1[parseInt('0')];
      this.revenueChart.datasets[1].data = dataSet1[parseInt('1')];
      this.revenueChart.datasets[2].data = dataSet1[parseInt('2')];
      this.revenueChart.datasets[3].data = dataSet1[parseInt('3')];
    }
  }

  changeCustomerChart(event: any) {
    const dataSet1 = [
      [10, 25, 48, 35, 54, 70],
      [18, 35, 23, 30, 59, 65],
      [20, 47, 46, 46, 61, 70],
      [17, 34, 18, 48, 67, 68],
      [9, 37, 47, 50, 60, 62],
      [8, 48, 40, 52, 72, 75],
      [10, 18, 50, 47, 63, 80],
      [20, 36, 39, 58, 59, 85],
      [30, 45, 35, 50, 54, 81],
      [28, 35, 52, 56, 60, 77],
      [40, 40, 38, 45, 68, 86],
      [50, 23, 27, 34, 65, 90],
      [29, 27, 29, 42, 55, 84],
      [10, 37, 47, 29, 59, 80],
      [10, 54, 42, 38, 63, 83],
      [25, 44, 50, 56, 65, 92],
      [30, 43, 48, 45, 73, 78],
      [29, 47, 54, 60, 77, 86],
    ];
    const dataSet2 = [
      [10, 25, 48, 35, 54, 70],
      [20, 47, 46, 46, 61, 70],
      [17, 34, 18, 48, 67, 68],
      [50, 23, 27, 34, 65, 90],
      [8, 48, 40, 52, 72, 75],
      [9, 37, 47, 50, 60, 62],
      [10, 18, 50, 47, 63, 80],
      [30, 45, 35, 50, 54, 81],
      [10, 37, 47, 29, 59, 80],
      [28, 35, 52, 56, 60, 77],
      [25, 44, 50, 56, 65, 92],
      [18, 35, 23, 30, 59, 65],
      [20, 36, 39, 58, 59, 85],
      [29, 27, 29, 42, 55, 84],
      [40, 40, 38, 45, 68, 86],
      [30, 43, 48, 45, 73, 78],
      [10, 54, 42, 38, 63, 83],
      [29, 47, 54, 60, 77, 86],
    ];

    if (event.value.code === '1') {
      this.customerAvg = '621';
      this.customerMin = '198';
      this.customerMax = '957';
      this.customerChart.datasets[0].data = dataSet2[parseInt('0')];
      this.customerChart.datasets[1].data = dataSet2[parseInt('1')];
      this.customerChart.datasets[2].data = dataSet2[parseInt('2')];
      this.customerChart.datasets[3].data = dataSet2[parseInt('3')];
      this.customerChart.datasets[4].data = dataSet2[parseInt('4')];
      this.customerChart.datasets[5].data = dataSet2[parseInt('5')];
      this.customerChart.datasets[6].data = dataSet2[parseInt('6')];
      this.customerChart.datasets[7].data = dataSet2[parseInt('7')];
      this.customerChart.datasets[8].data = dataSet2[parseInt('8')];
      this.customerChart.datasets[9].data = dataSet2[parseInt('9')];
      this.customerChart.datasets[10].data = dataSet2[parseInt('10')];
      this.customerChart.datasets[11].data = dataSet2[parseInt('11')];
      this.customerChart.datasets[12].data = dataSet2[parseInt('12')];
      this.customerChart.datasets[13].data = dataSet2[parseInt('13')];
      this.customerChart.datasets[14].data = dataSet2[parseInt('14')];
      this.customerChart.datasets[15].data = dataSet2[parseInt('15')];
      this.customerChart.datasets[16].data = dataSet2[parseInt('16')];
      this.customerChart.datasets[17].data = dataSet2[parseInt('17')];
    } else {
      this.customerAvg = '875';
      this.customerMin = '284';
      this.customerMax = '1232';
      this.customerChart.datasets[0].data = dataSet1[parseInt('0')];
      this.customerChart.datasets[1].data = dataSet1[parseInt('1')];
      this.customerChart.datasets[2].data = dataSet1[parseInt('2')];
      this.customerChart.datasets[3].data = dataSet1[parseInt('3')];
      this.customerChart.datasets[4].data = dataSet1[parseInt('4')];
      this.customerChart.datasets[5].data = dataSet1[parseInt('5')];
      this.customerChart.datasets[6].data = dataSet1[parseInt('6')];
      this.customerChart.datasets[7].data = dataSet1[parseInt('7')];
      this.customerChart.datasets[8].data = dataSet1[parseInt('8')];
      this.customerChart.datasets[9].data = dataSet1[parseInt('9')];
      this.customerChart.datasets[10].data = dataSet1[parseInt('10')];
      this.customerChart.datasets[11].data = dataSet1[parseInt('11')];
      this.customerChart.datasets[12].data = dataSet1[parseInt('12')];
      this.customerChart.datasets[13].data = dataSet1[parseInt('13')];
      this.customerChart.datasets[14].data = dataSet1[parseInt('14')];
      this.customerChart.datasets[15].data = dataSet1[parseInt('15')];
      this.customerChart.datasets[16].data = dataSet1[parseInt('16')];
      this.customerChart.datasets[17].data = dataSet1[parseInt('17')];
    }
  }
  recentSales(event: any) {
    if (event.value.code === '0') {
      this.customersTable = this.customersTable1;
    } else {
      this.customersTable = this.customersTable2;
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
