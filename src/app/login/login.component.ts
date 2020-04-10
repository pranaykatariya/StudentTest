import { Component, OnInit } from '@angular/core';
import { Login } from 'src/models/Login.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login();
  constructor(private authService: AuthService) { }


  ngOnInit() {
  }

  onLoginSubmit()
  {
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    
    this.authService.authenticateUser(this.login.Name, this.login.password);
    
    console.log(this.login);
  }
}
