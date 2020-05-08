import { Component, OnInit } from '@angular/core';
import { Adminlogin } from 'src/models/Adminlogin.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  private message: string;

  adminlogin = new Adminlogin();
  constructor(private router: Router) { }

    ngOnInit(){
      
    }
  

  onLoginSubmit()
  {
    if( (this.adminlogin.username === "admin")  && (this.adminlogin.password === "admin123"))
    {
      sessionStorage.setItem('admin','1');
      this.router.navigate([
        '/admin'
      ]) 
    }else
    {
      this.message = "Invalid username or password";
    }
    
  }

}
