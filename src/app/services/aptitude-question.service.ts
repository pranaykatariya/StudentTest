import { Injectable} from '@angular/core';
import { Aptitude } from 'src/models/aptitude.model';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/models/Response.model';
import { CommonURLService } from './common-url.service';


@Injectable({
  providedIn: 'root'
})
export class AptitudeQuestionService {

  
  public questions: Aptitude[] = [];
  public aptitudeResponse: Response[] = [];
  


  constructor(private http: HttpClient, private url: CommonURLService) { 
    
    this.http.get<Aptitude[]>(url.technicalQuestion).subscribe((result) => {
    //console.log(result);  
    this.questions = result;
  }, error => console.error(error));
  
  console.log("Aptitude Questions are loaded");
  console.log(this.questions); 
  }


  // getAptitudeQuestion(no: number): Aptitude
  // {
  //   console.log("service");
  //   console.log(this.questions);
  //   return this.questions[no];
  // }

  calculateAptitudeMarks()
  {
    this.http.post<Response[]>( this.url.storeTechnicalMarks, this.aptitudeResponse)
        .subscribe( data =>
        {
          console.log(data);
          alert("Marks of aptitude sent to the server successfully");
        });
  }
}