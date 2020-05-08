import { Component, OnInit } from '@angular/core';
import { Aptitude } from 'src/models/aptitude.model';
import { AptitudeQuestionService } from '../services/aptitude-question.service';
import { Router } from '@angular/router';
import { Response } from 'src/models/Response.model';
import { CommonURLService } from '../services/common-url.service';

@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.css']
})
export class AptitudeComponent implements OnInit {
  
  private question: string;
  private optionA: string;
  private optionB: string;
  private optionC: string;
  private optionD: string;
  private checkedOptions: string[] = [];

  private no: number;

  constructor(private aptitudeService: AptitudeQuestionService, private router: Router, private commonUrl: CommonURLService) {

   }

  ngOnInit() {
    console.log("here");
    //console.log(this.aptitudeService.getAptitudeQuestion(0).question);
    setTimeout(() => {
    
    console.log("Question component");
      //console.log(this.questions);
    console.log(this.aptitudeService.questions[0]);
    this.question = this.aptitudeService.questions[0].question;
    this.optionA = this.aptitudeService.questions[0].optionA;
    this.optionB = this.aptitudeService.questions[0].optionB;
    this.optionC = this.aptitudeService.questions[0].optionC;
    this.optionD = this.aptitudeService.questions[0].optionD;
    this.no=0;

    }, this.commonUrl.questionLoadinTime );


    //This method will use to timeout from the given exam module
    setTimeout(() => {
      for (let index = 0; index < this.aptitudeService.questions.length; index++) {
        this.aptitudeService.aptitudeResponse.push(new Response(this.aptitudeService.questions[index].correctOption,this.checkedOptions[index], sessionStorage.getItem('email')));
      }

      //send data to the server 
      this.aptitudeService.calculateAptitudeMarks();

      console.log(this.aptitudeService.aptitudeResponse);

      console.log("Time over");
      this.router.navigate(['/technical']); 
      }, (this.commonUrl.aptitudeTime * 1000 * 60 + this.commonUrl.questionLoadinTime) );
  }

  updateCheckedOtions(response: string)
  {
    console.log('radio clicked');
    console.log(response);

    this.checkedOptions[this.no] = response;
  }

  loadNextQuestion()
  {
    console.log("next");
    if(this.no >= 14)
    {
      console.log("completed");
      
    }else{
    console.log(this.no);
    this.no++;
    this.question = this.aptitudeService.questions[this.no].question;
    this.optionA = this.aptitudeService.questions[this.no].optionA;
    this.optionB = this.aptitudeService.questions[this.no].optionB;
    this.optionC = this.aptitudeService.questions[this.no].optionC;
    this.optionD = this.aptitudeService.questions[this.no].optionD;
    }
  }

  loadPreviousQuestion()
  {
    console.log("prev");
    
    if(this.no <= 0)
    {
      console.log("completed");
    }else{
      console.log(this.no);
      this.no--;
      this.question = this.aptitudeService.questions[this.no].question;
    this.optionA = this.aptitudeService.questions[this.no].optionA;
    this.optionB = this.aptitudeService.questions[this.no].optionB;
    this.optionC = this.aptitudeService.questions[this.no].optionC;
    this.optionD = this.aptitudeService.questions[this.no].optionD;
    }
  }

  loadCustomQuestion(no:number)
  {
    this.no = no;
    console.log(this.no);
    this.question = this.aptitudeService.questions[this.no].question;
    this.optionA = this.aptitudeService.questions[this.no].optionA;
    this.optionB = this.aptitudeService.questions[this.no].optionB;
    this.optionC = this.aptitudeService.questions[this.no].optionC;
    this.optionD = this.aptitudeService.questions[this.no].optionD;
  }
}
