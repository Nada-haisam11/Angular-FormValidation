import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  exform!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.exform = new FormGroup({
      'email': new FormControl( '' ,  [Validators.required , Validators.email] ),
      'password': new FormControl('' , [Validators.required,Validators.minLength(8),Validators.maxLength(32)])
    })
  }

  clicksub(){
    console.log(this.exform.value);
    this.exform.reset();
  }

  get email(){
    return this.exform.get('email') as FormControl;
  }

  get password(){
    return this.exform.get('password') as FormControl;
  }

}
