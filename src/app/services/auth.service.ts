import { Injectable } from '@angular/core';
import { CommonURLService } from './common-url.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/models/student.model';
import { combineLatest } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuthenticated: boolean;
  public message : string ='';

  constructor(private http: HttpClient, private router: Router, private url: CommonURLService) { 
    if(sessionStorage.getItem("firstName") === null)
    {
      this.userAuthenticated = false;
    }else{
      this.userAuthenticated = true;
      // this.router.navigate(['/instruction']);      
    }
  }

  isAuthenticated(): boolean {
    return this.userAuthenticated;
    // return true;
  }

  authenticateUser(email: string,password: string)
  {
    

    this.http.get<Student>(this.url.loginStudent.concat(email)).subscribe((result) => {
      console.log(result)
      if(password === result.password)
      {
        this.userAuthenticated = true;
        sessionStorage.setItem("email",result.email);
        sessionStorage.setItem("firstName",result.firstName);
        sessionStorage.setItem("lastName",result.lastName);
        sessionStorage.setItem("gender",result.gender);
        sessionStorage.setItem("mobile",result.mobile);
        
        this.router.navigate(['/instruction']);
      }else
      {
        this.userAuthenticated = false;
        

        this.message = "Wrong username or password";
      }
    }, error => console.error(error));
  }


  logoutUser()
  {
    sessionStorage.clear();
    this.userAuthenticated = false;
    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // };
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/home'])
  }
}
