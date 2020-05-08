import { Component, OnInit, OnDestroy } from '@angular/core';
import { Technical } from 'src/models/technical.model';
import { TechnicalQuestionService } from '../services/technical-question.service';
import { Router } from '@angular/router';
import { Response } from 'src/models/Response.model';
import { CommonURLService } from '../services/common-url.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.css']
})
export class TechnicalComponent implements OnInit, OnDestroy {


  private question: string;
  private optionA: string;
  private optionB: string;
  private optionC: string;
  private optionD: string;
  public checkedOptions: string[] = new Array();

  public no: number;
  private timer;

  constructor(private technicalService: TechnicalQuestionService, private router: Router, private commonUrl: CommonURLService) {


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


    console.log("length here");
    console.log(this.technicalService.questions.length);

    console.log('filling array');
    
    for (let index = 0; index < this.technicalService.questions.length; index++) {
      this.checkedOptions.push('10');
    }

    for (let index = 0; index < this.technicalService.questions.length; index++) {
      console.log(this.checkedOptions[index]);
    }
    },this.commonUrl.questionLoadinTime);


    //This method will use to timeout from the given exam module
    this.timer = setTimeout(() => {
      

      this.router.navigate(['/home']); 
      }, (this.commonUrl.technicalTime * 1000 * 60 + this.commonUrl.questionLoadinTime));
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

    console.log(this.checkedOptions[0]);
    this.no = no;
    console.log(this.no);
    this.question = this.technicalService.questions[this.no].question;
    this.optionA = this.technicalService.questions[this.no].optionA;
    this.optionB = this.technicalService.questions[this.no].optionB;
    this.optionC = this.technicalService.questions[this.no].optionC;
    this.optionD = this.technicalService.questions[this.no].optionD;
  }

  sendMarksToServer()
  {
    for (let index = 0; index < this.technicalService.questions.length; index++) {
      this.technicalService.technicalResponse.push(new Response(this.technicalService.questions[index].correctOption,this.checkedOptions[index], sessionStorage.getItem('email')));
    }

    //send data to the server for marks calcualtion of module
    this.technicalService.calculateTechnicalMarks();

    console.log(this.technicalService.technicalResponse);

    console.log("Time over");

    

    //Tried to print this array out in the console
    for(let i=0; i<this.technicalService.questions.length; i++){
      console.log(this.checkedOptions[i]); //use i instead of 0
  }
  }

  ngOnDestroy()
  {
    console.log("communication destroyed")
    this.sendMarksToServer();    
    clearTimeout( this.timer );
  }
}
