import { Component, OnInit } from '@angular/core';
import { info, educs, languages, exp } from '../../assets/data.json';
import { Chart } from 'chart.js';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public xinfo: any;
  public xLng: any;
  public xEduc: any;
  public xExp: any;
  public lngChart: any;

  constructor(
  ) { }

  ngOnInit() {
    this.xinfo = info;
    this.xLng = languages;
    this.xEduc = educs;
    this.xExp = exp;
    this.plotToChart()
  }

  plotToChart() {
    let labelsLs: string[] = [];
    let dataSets: number[] = [];
    let colorBdrLs: string[] = [];
    let colorBgLs: string[] = [];
    _.forEach(this.xLng, arr => {
      let color = this.randomizeColor();
      labelsLs.push(arr.name)
      dataSets.push(parseInt(arr.percent))
      colorBdrLs.push(color + 'FF')
      colorBgLs.push(color + '33')
    })
    this.lngChart = new Chart('lngProf', {
      type: 'bar',
      data: {
        labels: labelsLs,
        datasets: [{
          data: dataSets,
          backgroundColor: colorBgLs,
          borderColor: colorBdrLs,
          borderWidth: 1
        }]
      },
      options: {
        title: {
          display: false
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: (tooltipItem, data) => {
              let lbl = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
              return 'Proficiency: ' + lbl + '%'
            }
          }
        }
      }
    })
    this.lngChart.render()
  }

  randomizeColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
