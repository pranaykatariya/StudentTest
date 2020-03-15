import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from 'src/models/student.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private firstName: string;
  private lastName: string;
  private email: string;
  private mobile: string;
  private password: string;
  private gender: string;
  private sscPercentage: number;
  private sscMath: number;
  private hscPercentage: number;
  private hscMath: number;

  constructor(private studentService: StudentService) { }

  ngOnInit() 
  {
    this.firstName = "Pranay";
    this.lastName = "Katariya";
    this.email = "pranaykatariya1@gmail.com";
    this.mobile = "7447830536";
    this.password = "123456";
    this.gender = "Male";
    this.sscPercentage = 99;
    this.sscMath = 88;
    this.hscPercentage = 77.31;
    this.hscMath = 90;

    

  }


  signUpUser()
  {
    console.log("Button clicked")
    this.studentService.postStudentDataToServer(new Student(this.firstName,this.lastName,this.email,this.mobile, this.password, this.gender, this.sscPercentage,this.sscMath, this.hscPercentage,this.hscMath));
  }

}
