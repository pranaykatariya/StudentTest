import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonURLService {

  //baseUrl: string = "https://restpsp.herokuapp.com/"

  communicationURL: string = '/communication';
  communicationTime: number = 15;

  writingURL: string = '/writing';
  writingTime: number = 10;

  aptitudeURL: string = '/aptitude';
  aptitudeTime: number = 20;
  
  technicalURL: string = '/technical';
  technicalTime: number  = 18;
  

  aptitudeQuestion: string  = "https://restpsp.herokuapp.com/getAptitudeQuestions";
  storeAptitudeMarks: string = "https://restpsp.herokuapp.com/storeAptitudeMarks";


  technicalQuestion: string  = "https://restpsp.herokuapp.com/getTechnicalQuestions";
  storeTechnicalMarks: string = "https://restpsp.herokuapp.com/storeTechnnicalMarks";

  communicationQuestion: string = "https://restpsp.herokuapp.com/getCommunicationQuestions";
  storeCommunicationMarks: string = "https://restpsp.herokuapp.com/storeCommunicationMarks";


  signUpStudent: string = "https://restpsp.herokuapp.com/createStudent";
  loginStudent: string = "https://restpsp.herokuapp.com/students/";
  

  constructor() { }

}
