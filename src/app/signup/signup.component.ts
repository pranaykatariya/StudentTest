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
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    //remove below line once gender validation is done
    this.student.gender = "male";
    //remove above line once gender validation is done
    
    
    this.studentService.postStudentDataToServer(this.student);
    
  }

}
