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

  
  
  PieChart=[];
  constructor(private studentService: StudentService ) { }

  
  
  ngOnInit()
  {
    

    this.studentService.getAllStudents();

    //You have to work on data stored in this variable
    this.studentService.studentsData

    //this is all students data in json format available after 3 sec 
    setTimeout(() => {
      console.log(this.studentService.studentsData);
    
    
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





