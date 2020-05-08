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


  student = new Student();

  // studentMark = new StudentMark();
  

  constructor(private studentService: StudentService, private router: Router) {
    
   }

  ngOnInit() {

    if (sessionStorage.getItem('email')) {
      
      this.router.navigate([
        '/instruction'
      ])
      
    }

  }


  onSubmit()
  {
    console.log("submit clicked")
    console.log(this.student);
    
    // this.studentMark.SSCPercentage = this.student.SSC_Percentage.toString();
    // this.studentMark.HSCPercentage = this.student.HSC_Percentage.toString();
    // this.studentMark.SSCMaths = this.student.SSC_Maths.toString();
    // this.studentMark.HSCMaths = this.student.HSC_Maths.toString();
    // this.studentMark.email = this.student.email;
    this.studentService.postStudentDataToServer(this.student);


    // console.log(this.studentMark);
    // this.studentService.postStudentMarkToServer(this.studentMark);
    
  }

}
