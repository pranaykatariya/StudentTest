import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonURLService } from '../services/common-url.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private email : string;
  private password : string;
  constructor(private auth: AuthService) { }

  ngOnInit() 
  {
    this.email = "pranaykatariya1@gmail.com";
    this.password = "123456";
  }


  loginUser()
  {
    console.log("processing login");
    this.auth.authenticateUser(this.email,this.password);
  }

}
