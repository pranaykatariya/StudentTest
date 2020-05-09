import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { CommonURLService } from '../services/common-url.service';
import { StudentMark } from 'src/models/StudentMark.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    private data:StudentMark[];


  constructor(private router: Router, private studentService: StudentService) { }

  ngOnInit() {

    if( sessionStorage.getItem('admin') ){
        console.log("Authorized user")
    }else{
      this.router.navigate([
      '/admin-login'
    ])  
    }

    this.studentService.getAllStudents();
    this.studentService.studentsData
    setTimeout(() => {
      console.log(this.studentService.studentsData);

      this.data=this.studentService.studentsData;

    }, 3000);
  }

}
