import { Component, OnInit } from '@angular/core';
import { Technical } from 'src/models/technical.model';
import { TechnicalQuestionService } from '../services/technical-question.service';
import { Router } from '@angular/router';
import { Response } from 'src/models/Response.model';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.css']
})
export class TechnicalComponent implements OnInit {


  private question: string;
  private optionA: string;
  private optionB: string;
  private optionC: string;
  private optionD: string;
  private checkedOptions: string[] = [];

  private no: number;

  constructor(private technicalService: TechnicalQuestionService, private router: Router) { 

  }

  ngOnInit() {
    console.log("here");
    //console.log(this.aptitudeService.getAptitudeQuestion(0).question);
    setTimeout(() => {
    
    console.log("Question component");
      //console.log(this.questions);
    console.log(this.technicalService.questions[0]);
    this.question = this.technicalService.questions[0].question;
    this.optionA = this.technicalService.questions[0].optionA;
    this.optionB = this.technicalService.questions[0].optionB;
    this.optionC = this.technicalService.questions[0].optionC;
    this.optionD = this.technicalService.questions[0].optionD;
    this.no=0;

    },3000);


    //This method will use to timeout from the given exam module
    setTimeout(() => {
      for (let index = 0; index < this.technicalService.questions.length; index++) {
        this.technicalService.technicalResponse.push(new Response(this.technicalService.questions[index].correctOption,this.checkedOptions[index]));
      }

      //send data to the server 
      this.technicalService.calculateTechnicalMarks();

      console.log(this.technicalService.technicalResponse);

      console.log("Time over");
      this.router.navigate(['/home']); 
      },100000);
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
    this.question = this.technicalService.questions[this.no].question;
    this.optionA = this.technicalService.questions[this.no].optionA;
    this.optionB = this.technicalService.questions[this.no].optionB;
    this.optionC = this.technicalService.questions[this.no].optionC;
    this.optionD = this.technicalService.questions[this.no].optionD;
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
      this.question = this.technicalService.questions[this.no].question;
    this.optionA = this.technicalService.questions[this.no].optionA;
    this.optionB = this.technicalService.questions[this.no].optionB;
    this.optionC = this.technicalService.questions[this.no].optionC;
    this.optionD = this.technicalService.questions[this.no].optionD;
    }
  }

  loadCustomQuestion(no:number)
  {
    this.no = no;
    console.log(this.no);
    this.question = this.technicalService.questions[this.no].question;
    this.optionA = this.technicalService.questions[this.no].optionA;
    this.optionB = this.technicalService.questions[this.no].optionB;
    this.optionC = this.technicalService.questions[this.no].optionC;
    this.optionD = this.technicalService.questions[this.no].optionD;
  }
}
