import { Injectable } from '@angular/core';
import { Technical } from 'src/models/technical.model';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/models/Response.model';
import { CommonURLService } from './common-url.service';

@Injectable({
  providedIn: 'root'
})
export class TechnicalQuestionService {

  public questions: Technical[] = [];
  public technicalResponse: Response[] = [];

  constructor(private http: HttpClient, private url: CommonURLService) { 
    this.http.get<Technical[]>(url.technicalQuestion).subscribe((result) => {
      //console.log(result);  
      this.questions = result;
  }, error => console.error(error));

  console.log("Technical Questions are loaded");
  console.log(this.questions); 
}

 // getAptitudeQuestion(no: number): Aptitude
  // {
  //   console.log("service");
  //   console.log(this.questions);
  //   return this.questions[no];
  // }

  calculateTechnicalMarks()
  {
    this.http.post<Response[]>( this.url.storeTechnicalMarks, this.technicalResponse)
        .subscribe( data =>
        {
          console.log(data);
          alert("Marks of technical sent to the server successfully");
        });
  }

}