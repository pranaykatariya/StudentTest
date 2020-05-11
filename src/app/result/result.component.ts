import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { StudentService } from '../services/student.service';

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

 
  private email: string;
  private activeUserUrl: string;
  private correct_ans:number;
  private wrong_ans:number;
  private total_q:number;
  private time_used:string;
  private average:number;
  

 
  
  
  PieChart=[];
  constructor(private studentService: StudentService ) { }

  
  
  ngOnInit()
  {
    this.email = sessionStorage.getItem('email')

    this.activeUserUrl = "https://restpsp.herokuapp.com/students/"+this.email;
    this.studentService.getStudent(this.activeUserUrl);

    //You have to work on data stored in this variable
    this.studentService.activeUser

    
    

    //this is all students data in json format available after 3 sec 
    setTimeout(() => {
      console.log(this.studentService.activeUser)     
      // this.studentService.activeUser.communication_marks
    
      
      this.correct_ans=this.studentService.activeUser.communication_marks+this.studentService.activeUser.aptitude_marks
      +this.studentService.activeUser.writing_marks+this.studentService.activeUser.technical_marks

      this.total_q=76
      this.wrong_ans=this.total_q-this.correct_ans

     this.time_used=this.consumedCommunicationTime[0]+ this.consumedWritingTime[0]
      +this.consumedAptitudeTime[0]+this.consumedTechnicalTime[0]

      this.average=this.correct_ans/4

      
      

    }, 3000);

    this.consumedCommunicationTime = localStorage.getItem('consumedCommunicationTime');
    this.consumedWritingTime = localStorage.getItem('consumedWritingTime');
    this.consumedAptitudeTime = localStorage.getItem('consumedAptitudeTime');
    this.consumedTechnicalTime = localStorage.getItem('consumedTechnicalTime');
  
    
    
  }

  
  

}





