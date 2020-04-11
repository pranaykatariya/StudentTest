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

  clearTimer() { clearInterval(this.intervalId); }

  ngOnInit()    { 
    this.intervalId = 0;
    this.message = '';
    this.seconds = 0;
    this.getTime();
    this.start(); 
  }
  
  ngOnDestroy() { this.clearTimer(); }



  getTime() {
    if(this.router.url === this.commonURL.communicationURL)
    {
      this.minute = this.commonURL.communicationTime;
    }else if (this.router.url === this.commonURL.technicalURL) {
      this.minute = this.commonURL.technicalTime;
    } else if (this.router.url === this.commonURL.writingURL) {
      this.minute = this.commonURL.writingTime;
    } else if (this.router.url === this.commonURL.aptitudeURL) {
      this.minute = this.commonURL.aptitudeTime;
    } else {
      this.minute = this.commonURL.communicationTime;
    } 
  }


  start() { this.countDown(); }
  stop()  {
    this.clearTimer();
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {

    if(this.minute == 0)
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
  }
}