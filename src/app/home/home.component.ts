import { Component, OnInit } from '@angular/core';
import { AptitudeQuestionService } from '../services/aptitude-question.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http
      .get('http://localhost:8090/getTechnicalQuestions')
      .subscribe(
        responseData =>{
        console.log(responseData)        
      })
      
  }

}
