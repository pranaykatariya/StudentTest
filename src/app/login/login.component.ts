import { Component, OnInit } from '@angular/core';
import { Login } from 'src/models/Login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login();
  constructor() { }


  ngOnInit() {
  }

  onSubmit()
  {
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    console.table(this.login);
  }

}
