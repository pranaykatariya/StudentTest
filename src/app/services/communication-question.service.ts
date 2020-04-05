import { Injectable } from '@angular/core';
import { Communication } from 'src/models/communication.model';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/models/Response.model';
import { CommonURLService } from './common-url.service';

@Injectable({
  providedIn: 'root'
})
export class CommunicationQuestionService {

  public questions: Communication[] = [];
  public communicationResponse: Response[] = [];



  constructor(private http: HttpClient, private url: CommonURLService) { 
    this.http.get<Communication[]>(url.communicationQuestion).subscribe((result) => {
      //console.log(result);  
      this.questions = result;
  }, error => console.error(error));
  console.log("Communication Questions are loaded");
  console.log(this.questions); 
}

   // getAptitudeQuestion(no: number): Aptitude
  // {
  //   console.log("service");
  //   console.log(this.questions);
  //   return this.questions[no];
  // }

  calculateCommunicationMarks()
  {
    this.http.post<Response[]>( this.url.storeCommunicationMarks, this.communicationResponse)
        .subscribe( data =>
        {
          console.log(data);
          alert("Marks of communication sent to the server successfully");
        });
  }

}
