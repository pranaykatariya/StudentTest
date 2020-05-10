import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { StudentMark } from 'src/models/StudentMark.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    private data:StudentMark[];
    private length: number;
    private avg:number;
    private sum:number;
    



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
      
  /*    
        function average() {
          this.sum=0;
        for(var i=0;i<this.data.length;i++)
        {
          this.sum += this.data[i].aptitude_marks;
        }
        this.avg=this.sum/this.data.length;
          return this.avg;
        }
*/
      }, 18000);

    }

    

  }

}
