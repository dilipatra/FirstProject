import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  fg_Login = new FormGroup({
    txt_User_Name: new FormControl(''),
    txt_Password: new FormControl(''),
  });

  LogIn()
  {
    console.warn(this.fg_Login.value);
    alert(this.fg_Login.controls['txt_User_Name'].value);
  }
}
