import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonURLService {

  //baseUrl: string = "http://localhost:8090/"

  //This no is in millisecond
  questionLoadinTime: number = 3000;

  communicationURL: string = '/communication';
  communicationTime: number = 15;
  // communicationTime: number = 1;

  writingURL: string = '/writing';
  writingTime: number = 15;

  aptitudeURL: string = '/aptitude';
  aptitudeTime: number = 30;
  // aptitudeTime: number = 1;
  
  technicalURL: string = '/technical';
  technicalTime: number  = 30;
  // technicalTime: number  = 1;

  resultURL: string = '/result';
  //This is next url to be loaded in the component
  public nextURL: string = '';

  

  aptitudeQuestion: string  = "http://localhost:8090/getAptitudeQuestions";
  storeAptitudeMarks: string = "http://localhost:8090/storeAptitudeMarks";


  technicalQuestion: string  = "http://localhost:8090/getTechnicalQuestions";
  storeTechnicalMarks: string = "http://localhost:8090/storeTechnnicalMarks";

  communicationQuestion: string = "http://localhost:8090/getCommunicationQuestions";
  storeCommunicationMarks: string = "http://localhost:8090/storeCommunicationMarks";


  signUpStudent: string = "http://localhost:8090/createStudent";
  updateStudentMarks: string = "http://localhost:8090/updateMarks";
  loginStudent: string = "http://localhost:8090/students/";


  // technicalQuestion: string  = "https://restpsp.herokuapp.com/getTechnicalQuestions";
  // storeTechnicalMarks: string = "https://restpsp.herokuapp.com/storeTechnnicalMarks";


  // aptitudeQuestion: string  = "https://restpsp.herokuapp.com/getAptitudeQuestions";
  // storeAptitudeMarks: string = "https://restpsp.herokuapp.com/storeAptitudeMarks";

  // communicationQuestion: string = "https://restpsp.herokuapp.com/getCommunicationQuestions";
  // storeCommunicationMarks: string = "https://restpsp.herokuapp.com/storeCommunicationMarks";


  // signUpStudent: string = "https://restpsp.herokuapp.com/createStudent";
  // loginStudent: string = "https://restpsp.herokuapp.com/students/";
  

  constructor() { 


  }

}
