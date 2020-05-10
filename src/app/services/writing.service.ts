import { Injectable } from '@angular/core';
import { CommonURLService } from './common-url.service';
import { HttpClient } from '@angular/common/http';
import { WritingModel } from 'src/models/writing.model';

@Injectable({
  providedIn: 'root'
})
export class WritingService {

  public question: string[] = [];

  public response: WritingModel;
  
  constructor(private http: HttpClient, private url: CommonURLService) {

    this.response = new WritingModel()
    this.question.push('Globalization and Economy')
    this.question.push('Education and Technology')
    this.question.push('Health and Education')
    this.question.push('Hacking')
    this.question.push("Global Warming and it's threat's")
    this.question.push("Influence of social media")

   }

   getQuestion(): string
   {
      return this.question[(this.randomIntFromInterval(0,5))]
   }


   randomIntFromInterval(min, max): number { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  calculateWritingMarks()
  {
    console.log("Json sent to server")
    console.log(this.response)
    this.http.post<WritingModel>( this.url.storeWritingMarks, this.response)
        .subscribe( data =>
        {
          console.log(data);
          alert("Marks of aptitude sent to the server successfully");
        });
  }


}
