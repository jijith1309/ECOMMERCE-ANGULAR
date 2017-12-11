import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.InitForm();
  }
  onSubmit(){
    const username=this.signupForm.value['username'];
    const password=this.signupForm.value['password'];
    // console.log('User Name:'+username + '; Password:' +password);
    console.log(this.signupForm);
    //Send details to server
  }
  InitForm(){
    this.signupForm=new FormGroup({
      'username':new FormControl(null,Validators.required),
      'firstname':new FormControl(null,Validators.required),
      'lastname':new FormControl(null),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'passwordGroup':new FormGroup({
            'password':new FormControl(null,[Validators.required,this.forbiddenPassword.bind(this)]),
            'repassword':new FormControl(null,Validators.required),
         })
    });
  }
  forbiddenPassword(control: FormControl): {[s: string]: boolean} {
     if (control.value=='a') {
      return {'': true};
    }
    return null;
  }
}
