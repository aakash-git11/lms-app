import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { LmsService } from '../service/lms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  users: any[] = [];
  userType: string = "";
  constructor(private readonly lmsservice: LmsService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  getErrorUsername() {
    return this.loginForm.get('username')?.hasError('required') ? 'username is required' : '';
  }

  getErrorPassword() {
    return this.loginForm.get('password')?.hasError('required') ? 'password is required' : '';
  }

  login(loginData: any) {
    console.log(loginData);
    this.lmsservice.userLogin(loginData).subscribe(res => {
      console.log(res);
      if (res.isSuccess) {
        alert(res.displayMessage);
        this.router.navigate(['fetchcourses']);
      }
      else {
        alert("Login failed! please check username and password");
      }
    })
  }
}