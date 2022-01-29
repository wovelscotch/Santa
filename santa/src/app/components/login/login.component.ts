import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  
  @Output() submitLogin: EventEmitter<any> = new EventEmitter();
  
  loginForm = this.formBuilder.group({
  name:'',
    password:''
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  onSumbit() {
    console.log("lol hax",this.loginForm.value)
    this.loginForm.reset();
    this.submitLogin.emit();
  }

}
