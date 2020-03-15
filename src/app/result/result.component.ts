import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  PieChart=[];
  constructor() { }

  ngOnInit()
  {
    
  }
  // ngOnInit() {
    
  //   this.PieChart = new Chart('pieChart',{
  //   type:'pie',
  //   data:{
  //     labels:["blue","Green","Pink"],
  //     datasets:[{
 
  //      label:'Vote Now',
  //      data:[101,102,103],
  //      backgroundColor:[
 
  //        'rgba(40,23,244,0.9)',
  //        'rgba(192,255,0,0.9)',
  //        'rgba(239,23,240,0.9)'
 
  //      ],
 
  //     }]
  //   },
  //   options:{
 
  //    title:{
  //      //Text:"Bar chart",
  //      display:true
  //    },
 
  //    scales:{
 
  //      yAxes:[{
  //        ticks:{
  //          beginAtZero:true
  //        }
  //      }]
  //    }
 
 
  //   }
  // });
 
 
  //}

}





