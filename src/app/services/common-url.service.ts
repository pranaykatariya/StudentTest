import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonURLService {

  technicalQuestion: string  = "http://localhost:8090/getTechnicalQuestions";
  storeTechnicalMarks: string = "http://localhost:8090/storeTechnnicalMarks";
  signUpStudent: string = "http://localhost:8090/createStudent";
  loginStudent: string = "http://localhost:8090/students/";
  

  constructor() { }

}
