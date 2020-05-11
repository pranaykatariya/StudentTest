import { Injectable } from '@angular/core';
import { CommonURLService } from './common-url.service';
import { Student } from 'src/models/student.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StudentMark } from 'src/models/StudentMark.model';
import { strictEqual } from 'assert';
import { StudentResult  } from 'src/models/StudentResult.model';
import { ReturnStatement } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class StudentService
{
  
  //serverResponse: studentResponse;
  public serverResponse: Student;
  public studentMark: StudentMark;
  public activeUser: StudentResult;
  public sum:number;
  public avg:number;
 
 


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
    
    this.http.get<StudentResult>(idURL).subscribe((result) => {
      //console.log(result);  
      this.activeUser = result;
      console.log('active student data loaded')
      
    }, error => console.error(error));    
  } 
  


  aptiaverage(): number
  {
        this.sum=0;
        this.avg=0;
        for(var i=0;i<this.studentsData.length;i++)
        {
          this.sum = this.sum+this.studentsData[i].aptitude_marks;
        }
        this.avg=((this.sum*100)/(this.studentsData.length*30));

         return parseFloat(this.avg.toFixed(2));
  }

  techaverage(): number
  {
        this.sum=0;
        this.avg=0;
        for(var i=0;i<this.studentsData.length;i++)
        {
          this.sum = this.sum+this.studentsData[i].technical_marks;
        }
        this.avg=((this.sum*100)/(this.studentsData.length*30));

         return parseFloat(this.avg.toFixed(2));
  }

  wriaverage(): number
  {
        this.sum=0;
        this.avg=0;
        for(var i=0;i<this.studentsData.length;i++)
        {
          this.sum = this.sum+this.studentsData[i].writing_marks;
        }
        this.avg=((this.sum*100)/(this.studentsData.length*15));

         return parseFloat(this.avg.toFixed(2));
  }

  commaverage(): number
  {
        this.sum=0;
        this.avg=0;
        for(var i=0;i<this.studentsData.length;i++)
        {
          this.sum = this.sum+this.studentsData[i].communication_marks;
        }
        this.avg=((this.sum*100)/(this.studentsData.length*15));

        return parseFloat(this.avg.toFixed(2));
  }

  allaverage(): number
  {
        this.sum=0;
        this.avg=0;
        for(var i=0;i<this.studentsData.length;i++)
        {
          this.sum = this.sum+this.studentsData[i].communication_marks+this.studentsData[i].writing_marks+this.studentsData[i].technical_marks+this.studentsData[i].aptitude_marks;
        
        }
        this.avg=(this.sum/this.studentsData.length);

         return parseFloat(this.avg.toFixed(2));
  }


  getcolor(x:number): string
  {
    if(x>=0 && x<=25)
    {
      return 'bg-danger';
    }
    else if(x>25 && x<=51){
      return 'bg-warning';
    }
    else if(x>51 && x<=75){
      return 'bg-info';
    }
    else if(x>75 && x<=100){
      return 'bg-success';
    }
    else
    {
      return 'bg-dark';
    }
      
  }


  
}

