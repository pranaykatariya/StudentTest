import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonURLService } from '../services/common-url.service';
import { WritingService } from '../services/writing.service';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {


  private question: string;
  private answer: string;

  constructor(private router: Router, private commonUrl: CommonURLService, private writingService: WritingService) { }

  ngOnInit() {
    
    this.question = this.writingService.getQuestion();
    
    // setTimeout(() => {
    
    // },this.commonUrl.questionLoadinTime);


    //This method will use to timeout from the given exam module
    setTimeout(() => {
      
      this.router.navigate(['/aptitude']);
      },(this.commonUrl.writingTime * 1000 * 60 + this.commonUrl.questionLoadinTime));

  }

  calculateMarks()
  {
      this.writingService.response.question = this.question;
      this.writingService.response.answer = this.answer;
      this.writingService.response.email = sessionStorage.getItem('email')
      this.writingService.calculateWritingMarks();
  }

  
  
}
