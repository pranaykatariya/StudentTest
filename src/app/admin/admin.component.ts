import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { StudentMark } from 'src/models/StudentMark.model';
import { Renderer2 } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    private data:StudentMark[];


  constructor(private router: Router, private studentService: StudentService) { 

    
    
  }

  ngOnInit() {


    if( sessionStorage.getItem('admin') ){
        console.log("Authorized user")

    }else{
      this.router.navigate([
      '/admin-login'
    ])
    
    
    }

    if(this.studentService.studentsData.length > 0)
    {
      console.log("already loaded")
    setTimeout(() => {
      console.log(this.studentService.studentsData);

      this.data=this.studentService.studentsData;


    }, 30);
    }
    else{

      console.log("loading data please wait")
      setTimeout(() => {
        this.studentService.getAllStudents();
        this.studentService.studentsData
        console.log(this.studentService.studentsData);
  
        this.data=this.studentService.studentsData; 

        
      }, 18000);

     
    }


}  


}
