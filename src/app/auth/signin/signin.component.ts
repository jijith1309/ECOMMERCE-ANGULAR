import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm:FormGroup;
  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
    this.InitForm();
  }
  onSubmit(){
    const username=this.signinForm.value['username'];
    const password=this.signinForm.value['password'];
    //Send details to server
    this.authService.signinUser(username,password);
  }
  InitForm(){
    this.signinForm=new FormGroup({
      'username':new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required)
       });
  }
}
