import { Component, OnInit } from '@angular/core';
import { Communication } from 'src/models/communication.model';
import { CommunicationQuestionService } from '../services/communication-question.service';
import { Router } from '@angular/router';
import { Response } from 'src/models/Response.model';
import { CommonURLService } from '../services/common-url.service';


@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  private question: string;
  private optionA: string;
  private optionB: string;
  private optionC: string;
  private optionD: string;
  private checkedOptions: string[] = [];

  private no: number;

  constructor(private communicationService: CommunicationQuestionService, private router: Router, private commonUrl: CommonURLService) { }

  ngOnInit() {

    console.log("here");
    this.no  = 0;
    this.question = "loading...";
    //console.log(this.aptitudeService.getAptitudeQuestion(0).question);
    setTimeout(() => {
    
    console.log("Question component");
      //console.log(this.questions);
    console.log(this.communicationService.questions[0]);
    this.question = this.communicationService.questions[0].question;
    this.optionA = this.communicationService.questions[0].optionA;
    this.optionB = this.communicationService.questions[0].optionB;
    this.optionC = this.communicationService.questions[0].optionC;
    this.optionD = this.communicationService.questions[0].optionD;
    this.no=0;

    },this.commonUrl.questionLoadinTime);


    //This method will use to timeout from the given exam module
    setTimeout(() => {
      for (let index = 0; index < this.communicationService.questions.length; index++) {
        this.communicationService.communicationResponse.push(new Response(this.communicationService.questions[index].correctOption,this.checkedOptions[index]));
      }

      //send data to the server 
      this.communicationService.calculateCommunicationMarks();

      console.log('communication component')
      console.log(this.communicationService.communicationResponse);

      // console.log("Time over");
      this.router.navigate(['/writing']);
      },(this.commonUrl.communicationTime * 1000 * 60 + this.commonUrl.questionLoadinTime));

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
    this.question = this.communicationService.questions[this.no].question;
    this.optionA = this.communicationService.questions[this.no].optionA;
    this.optionB = this.communicationService.questions[this.no].optionB;
    this.optionC = this.communicationService.questions[this.no].optionC;
    this.optionD = this.communicationService.questions[this.no].optionD;
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
      this.question = this.communicationService.questions[this.no].question;
    this.optionA = this.communicationService.questions[this.no].optionA;
    this.optionB = this.communicationService.questions[this.no].optionB;
    this.optionC = this.communicationService.questions[this.no].optionC;
    this.optionD = this.communicationService.questions[this.no].optionD;
    }
  }

  loadCustomQuestion(no:number)
  {
    this.no = no;
    console.log(this.no);
    this.question = this.communicationService.questions[this.no].question;
    this.optionA = this.communicationService.questions[this.no].optionA;
    this.optionB = this.communicationService.questions[this.no].optionB;
    this.optionC = this.communicationService.questions[this.no].optionC;
    this.optionD = this.communicationService.questions[this.no].optionD;
  }
}


