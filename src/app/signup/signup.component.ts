import { Component, OnInit } from '@angular/core';
import { Student } from 'src/models/student.model';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { StudentMark } from 'src/models/StudentMark.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private message: string;
  student = new Student();

  // studentMark = new StudentMark();
  

  constructor(private studentService: StudentService, private router: Router) {
    
   }

  ngOnInit() {
    

  }


  onSubmit()
  {

    if(this.student.SSC_Percentage <0 ||this.student.SSC_Percentage>100){
      this.message = "Enter marks in range 0-100";
    }
    else if(this.student.SSC_Maths <0 ||this.student.SSC_Maths>100){
      this.message = "Enter marks in range 0-100";
    }
    else if(this.student.HSC_Percentage <0 ||this.student.HSC_Percentage>100){
      this.message = "Enter marks in range 0-100";
    }
    else if(this.student.HSC_Maths <0 ||this.student.HSC_Maths >100){
      this.message = "Enter marks in range 0-100";
    }
    else{
      this.router.navigate([
        '/login'
      ]) 
    }
    
    
  }
}
