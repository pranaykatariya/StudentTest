import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { CommonURLService } from '../services/common-url.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    private fname:string;
    private lname:string;
    private email: string;
    private mob:string;
    private gender:string;
    private apti:number;
    private comm:number;
    private tech:number;
    private wri:number;
    private hscp:number;
    private hscm:number;
    private sscp:number;
    private sscm:number;


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

      this.fname=this.studentService.studentsData[0].firstName;
      this.lname=this.studentService.studentsData[0].lastName;
      this.email=this.studentService.studentsData[0].email;
      this.mob=this.studentService.studentsData[0].mobile;
      this.gender=this.studentService.studentsData[0].gender;
      this.apti=this.studentService.studentsData[0].aptitude_marks;
      this.comm=this.studentService.studentsData[0].communication_marks;
      this.tech=this.studentService.studentsData[0].technical_marks;
      this.wri=this.studentService.studentsData[0].writing_marks;
      this.hscp=this.studentService.studentsData[0].HSC_Percentage;
      this.hscm=this.studentService.studentsData[0].HSC_Maths;
      this.sscp=this.studentService.studentsData[0].SSC_Percentage;
      this.sscm=this.studentService.studentsData[0].SSC_Maths;

    }, 3000);
  }

}
