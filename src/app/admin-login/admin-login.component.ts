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

 

  adminlogin = new Adminlogin();
  constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(){
      
    }
  

  onLoginSubmit()
  {
    if((this.adminlogin.username != "Admin")&&(this.adminlogin.password !="admin123")){
      alert('User Name and password does not match!!');
    }
    else{
      this.router.navigate([
        '/admin'
      ])
    }
    
    this.authService.authenticateUser(this.adminlogin.username, this.adminlogin.password);
    console.log(this.adminlogin);
    console.log(this.adminlogin.username);
    console.log(this.adminlogin.password);
  }

}
