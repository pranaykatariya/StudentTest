import { Component, OnInit } from '@angular/core';
import { Student } from 'src/models/student.model';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  student = new Student();
  

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }


  onSubmit()
  {
    console.log(this.student);
    
    
    this.studentService.postStudentDataToServer(this.student);
    
  }

}
