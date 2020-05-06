import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonURLService } from '../services/common-url.service';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {


  private question: string;

  constructor(private router: Router, private commonUrl: CommonURLService) { }

  ngOnInit() {

    
    
    this.question = "loading...";
    //console.log(this.aptitudeService.getAptitudeQuestion(0).question);
    setTimeout(() => {
    
    // this.question = this.communicationService.questions[0].question;
    

    },this.commonUrl.questionLoadinTime);


    //This method will use to timeout from the given exam module
    setTimeout(() => {
      

      //send data to the server 
      // this.communicationService.calculateCommunicationMarks();

      // console.log(this.communicationService.communicationResponse);

      // console.log("Time over");
      this.router.navigate(['/aptitude']);
      },(this.commonUrl.writingTime * 1000 * 60 + this.commonUrl.questionLoadinTime));

  }



  
  
}
