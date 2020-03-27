import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonURLService {

  //baseUrl: string = "https://restpsp.herokuapp.com/"
  technicalQuestion: string  = "https://restpsp.herokuapp.com/getTechnicalQuestions";
  storeTechnicalMarks: string = "https://restpsp.herokuapp.com/storeTechnnicalMarks";
  signUpStudent: string = "https://restpsp.herokuapp.com/createStudent";
  loginStudent: string = "https://restpsp.herokuapp.com/students/";
  

  constructor() { }

}
