import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit 
 {

  constructor() { }

  ngOnInit()
   {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['Communication', 'Writing', 'Aptitude', 'Technical'],
        datasets: 
        [{
          label: 'Result',
          data: [10, 19, 3, 5],
          backgroundColor: 
          [
            'rgba(0, 0, 255, 0.9)',
            'rgba(255, 0, 0, 0.9)',
            'rgba(0, 164, 0, 0.7)',
            'rgba(0, 0, 0, 0.7)'
          ],

        //  borderColor:
         //  [

         //   'rgba(255,99,132,1)',
         //   'rgba(54,162,235,1)',
         //   'rgba(255,206,86,1)',
         //   'rgba(75,192,192,2)'
         // ],

          borderwidth: 1
        }]
      },
      options: 
      {
        scales:
         {
          yAxes: 
          [{
            ticks: 
            {
              beginAtZero: true
            }
          }]
        }
      }
    });
    


  }

}
