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
    
      // this.communication_marks=this.studentService.studentsData.communication_marks;
      // this.technical_marks=this.studentService.studentsData[0].technical_marks;
      // this.writing_marks=this.studentService.studentsData[0].writing_marks;
      // this.aptitude_marks=this.studentService.studentsData[0].aptitude_marks;
      
      

    }, 3000);

    this.consumedCommunicationTime = localStorage.getItem('consumedCommunicationTime');
    this.consumedWritingTime = localStorage.getItem('consumedWritingTime');
    this.consumedAptitudeTime = localStorage.getItem('consumedAptitudeTime');
    this.consumedTechnicalTime = localStorage.getItem('consumedTechnicalTime');
  
    
    
  }

  
  

}





