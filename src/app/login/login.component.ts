import { Component, OnInit } from '@angular/core';
import { Login } from 'src/models/Login.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login();
  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit() {

    if (sessionStorage.getItem('email')) {
      
      this.router.navigate([
        '/instruction'
      ])
      
    }
  }

  onLoginSubmit()
  { 
    // setTimeout(function(){
      
    //  }, 3000);
    this.authService.authenticateUser(this.login.email, this.login.password);
    
    console.log(this.login);

    console.log(this.login.email);
    console.log(this.login.password);
    
  }

}
