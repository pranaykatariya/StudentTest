import { Component, OnInit } from '@angular/core';
import { Adminlogin } from 'src/models/Adminlogin.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

 

  adminlogin = new Adminlogin();
  constructor(private authService: AuthService) { }

    ngOnInit(){
    }
  

  onLoginSubmit()
  {
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    
    this.authService.authenticateUser(this.adminlogin.Name, this.adminlogin.password);
    
    console.log(this.adminlogin);
  }

}
