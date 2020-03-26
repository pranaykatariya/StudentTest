import { Injectable} from '@angular/core';
import { Aptitude } from 'src/models/aptitude.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AptitudeQuestionService {

  
  public questions: Aptitude[];
  
  constructor(private http: HttpClient) { 

    this.http.get<Aptitude[]>('http://localhost:8090/getTechnicalQuestions').subscribe((result) => {
    //console.log(result);  
    this.questions = result;
  }, error => console.error(error));
  
  console.log("Aptitude Questions are loaded");
  console.log(this.questions); 
  }


  getAptitudeQuestion(no: number): Aptitude
  {
    console.log("service");
    console.log(this.questions);
    return this.questions[no];
  }

  calculateAptitudeMarks(): Aptitude[]
  {
    return this.questions.slice();
  }
}