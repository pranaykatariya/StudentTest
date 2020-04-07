import { Component, OnInit } from '@angular/core';
import { Student } from 'src/models/student.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  student = new Student();
  

  constructor() { }

  ngOnInit() {
  }


  onSubmit()
  {
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    console.table(this.student);
    
  }

}
