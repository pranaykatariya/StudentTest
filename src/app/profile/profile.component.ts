import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  
  constructor() { }

  ngOnInit() {


    this.email = sessionStorage.getItem('email');
    this.firstName = sessionStorage.getItem('firstName');
    this.lastName = sessionStorage.getItem('lastName');
    this.mobile = sessionStorage.getItem('mobile');
    
    
  }

}
