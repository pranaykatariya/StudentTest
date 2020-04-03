import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonURLService {

  //baseUrl: string = "https://restpsp.herokuapp.com/"

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
