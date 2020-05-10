import { Injectable } from '@angular/core';
import { CommonURLService } from './common-url.service';
import { Student } from 'src/models/student.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StudentMark } from 'src/models/StudentMark.model';
import { strictEqual } from 'assert';


@Injectable({
  providedIn: 'root'
})
export class StudentService
{
  
  //serverResponse: studentResponse;
  public serverResponse: Student;
  public studentMark: StudentMark;
  public activeUser: Student;


  public studentsData: StudentMark[] = [];

  constructor(private http: HttpClient, private url: CommonURLService, private router: Router) { 

  }

  postStudentDataToServer(data: Student)
  {
    console.log("processing post request");
    this.http.post<Student>( this.url.signUpStudent,data)
    .subscribe(data =>
    {
      console.log("student data sent to server")
      
      this.serverResponse = data;
      
      console.log(this.serverResponse.message)
      // if(this.serverResponse.message)
      this.router.navigate(['/login']);
      console.log(data);
    });
  }

  postStudentMarkToServer(data: StudentMark)
  {
    console.log(data);
    this.http.post<Student>( this.url.updateStudentMarks, data)
    .subscribe(data =>
    {
      console.log("student data sent to server")
      
      // if(this.serverResponse.message)
      
      console.log(data);
    });  
  }


  getAllStudents()
  {
    this.http.get<StudentMark[]>(this.url.studentData).subscribe((result) => {
      //console.log(result);  
      this.studentsData = result;
      console.log('student data loaded')
      
    }, error => console.error(error));    
  }

  getStudent(idURL:string)
  {
    
    this.http.get<Student>(idURL).subscribe((result) => {
      //console.log(result);  
      this.activeUser = result;
      console.log('active student data loaded')
      
    }, error => console.error(error));    
  }  

}
