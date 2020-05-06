import { Injectable } from '@angular/core';
import { CommonURLService } from './common-url.service';
import { Student } from 'src/models/student.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class StudentService
{
  //serverResponse: studentResponse;
  public serverResponse: Student;

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
}
