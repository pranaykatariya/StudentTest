import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  
  private consumedCommunicationTime: string;
  private consumedTechnicalTime: string;
  private consumedWritingTime: string;
  private consumedAptitudeTime: string;

  
  PieChart=[];
  constructor() { }

  ngOnInit()
  {
    this.consumedCommunicationTime = localStorage.getItem('consumedCommunicationTime');
    this.consumedWritingTime = localStorage.getItem('consumedWritingTime');
    this.consumedAptitudeTime = localStorage.getItem('consumedAptitudeTime');
    this.consumedTechnicalTime = localStorage.getItem('consumedTechnicalTime');
  
  
  }

  
  
  

}





