import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonURLService } from '../services/common-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})


export class TimerComponent implements OnInit, OnDestroy {

  
  constructor(private commonURL: CommonURLService, private router:Router)
  {
    
  }

  intervalId;
  message;
  seconds;
  minute;
  url: string;
  totalTime: number;

  clearTimer() { clearInterval(this.intervalId); }

  ngOnInit()    { 
    this.intervalId = 0;
    this.message = '';
    this.seconds = 0;
    this.getTime();
    this.start(); 
  }
  
  ngOnDestroy() {
    var TotalTime  = (this.totalTime * 1000 * 60) - (this.minute * 1000 * 60 + this.seconds * 1000); 
    this.clearTimer(); 


    if(this.url === this.commonURL.communicationURL)
    {
      
      localStorage.setItem('consumedCommunicationTime', TotalTime.toString())      

    }else if (this.url === this.commonURL.technicalURL) {
      
      localStorage.setItem('consumedTechnicalTime', TotalTime.toString())

    } else if (this.url === this.commonURL.writingURL) {

      localStorage.setItem('consumedWritingTime', TotalTime.toString())
      
    } else if (this.url === this.commonURL.aptitudeURL) {
      
      localStorage.setItem('consumedAptitudeTime', TotalTime.toString())

    } else {
      this.minute = this.commonURL.communicationTime;
    } 

  }



  getTime() {
    if(this.router.url === this.commonURL.communicationURL)
    {
      this.minute = this.commonURL.communicationTime;
      this.totalTime = this.minute;
      this.url = this.router.url;
    }else if (this.router.url === this.commonURL.technicalURL) {
      this.minute = this.commonURL.technicalTime;
      this.totalTime = this.minute;
      this.url = this.router.url;
    } else if (this.router.url === this.commonURL.writingURL) {
      this.minute = this.commonURL.writingTime;
      this.totalTime = this.minute;
      this.url = this.router.url;
    } else if (this.router.url === this.commonURL.aptitudeURL) {
      this.minute = this.commonURL.aptitudeTime;
      this.totalTime = this.minute;
      this.url = this.router.url;
    } else {
      this.minute = this.commonURL.communicationTime;
    } 
  }


  start() { this.countDown(); }
  stop()  {
    this.clearTimer();
  }

  private countDown() {

    setTimeout(() => {
      
    
    
    this.clearTimer();
    this.intervalId = window.setInterval(() => {

    if(this.minute === 0)
    {
      this.stop;
    }
     if (this.seconds === 0) {
        this.minute--;
        this.seconds = 59;
        this.message = this.minute+':'+this.seconds;
      } else {
        this.seconds--;
        this.message = this.minute+':'+this.seconds;
      }
    }, 1000);
  }, 3000);
  }
}