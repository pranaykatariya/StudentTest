import { Component, OnInit } from '@angular/core';
import { Student } from 'src/models/student.model';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  student = new Student();
  

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
    
    
    this.studentService.postStudentDataToServer(this.student);
    
  }

}
