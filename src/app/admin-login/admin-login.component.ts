import { Component, OnInit } from '@angular/core';
import { Adminlogin } from 'src/models/Adminlogin.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  private message: string;

  adminlogin = new Adminlogin();
  constructor(private router: Router, private studentService: StudentService) { }

    ngOnInit(){
      this.studentService.getAllStudents();
    this.studentService.studentsData
    }
  

  onLoginSubmit()
  {
    if( (this.adminlogin.username === "admin")  && (this.adminlogin.password === "admin123"))
    {
      sessionStorage.setItem('admin','1');
      this.router.navigate([
        '/admin'
      ]) 
    }else
    {
      this.message = "Invalid username or password";
    }
    
  }

}
