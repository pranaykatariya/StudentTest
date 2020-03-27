import { Injectable } from '@angular/core';
import { CommonURLService } from './common-url.service';
import { Student } from 'src/models/student.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService
{

  constructor(private http: HttpClient, private url: CommonURLService) { 

  }

  postStudentDataToServer(data: Student)
  {
    console.log("processing post request");
    this.http.post<Student>( this.url.signUpStudent,data)
    .subscribe( data =>
    {
      console.log(data);
    });
  }
}
