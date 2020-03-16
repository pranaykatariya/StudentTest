import { Injectable } from '@angular/core';
import { CommonURLService } from './common-url.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuthenticated: boolean;

  constructor(private http: HttpClient, private router: Router, private url: CommonURLService) { 
    if(sessionStorage.getItem("firstName") === null)
    {
      this.userAuthenticated = false;
    }else{
      this.userAuthenticated = true;
      this.router.navigate(['/question']);      
    }
  }

  isAuthenticated(): boolean {
    //return this.userAuthenticated;
    return true;
  }

  authenticateUser(email: string,password: string)
  {
    this.http.get<Student>(this.url.loginStudent.concat(email)).subscribe((result) => {
      
      if(password === result.password)
      {
        this.userAuthenticated = true;
        sessionStorage.setItem("email",result.email);
        sessionStorage.setItem("firstName",result.firstName);
        sessionStorage.setItem("lastName",result.lastName);
        sessionStorage.setItem("gender",result.gender);
        sessionStorage.setItem("mobile",result.mobile);
        this.router.navigate(['/question']);
      }else
      {
        this.userAuthenticated = false;
      }
    }, error => console.error(error));
  }


  logoutUser()
  {
    sessionStorage.clear();
    this.userAuthenticated = false;
  }
}
