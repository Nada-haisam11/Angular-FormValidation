import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  xform!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.xform = new FormGroup({
      'username' : new FormControl('', Validators.required),
      'email': new FormControl ('',  [Validators.required , Validators.email]),
      'password': new FormControl ('' , [Validators.required,Validators.minLength(8),Validators.maxLength(32)])
    });

  }

  
  clickbtn(){
    console.log(this.xform.value);
    this.xform.reset();
  }
 

  get username(){
    return this.xform.get('username') as FormControl;
  }

  get email(){
    return this.xform.get('email') as FormControl;
  }

  get password(){
    return this.xform.get('password') as FormControl;
  }




}
