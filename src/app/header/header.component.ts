import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public variable: boolean;
  public user: string;
  constructor(private authService: AuthService) {

   }

  ngOnInit() {
    if(sessionStorage.getItem('email'))
    {
      console.log('user looged in');
      this.variable = true;
      this.user = sessionStorage.getItem('firstName');
    }else
    {
      console.log('user logged out')
      this.variable = false;
    }
  }

  logoutuser()
  {
    console.log('logged out');
    this.authService.logoutUser();
  }

}
