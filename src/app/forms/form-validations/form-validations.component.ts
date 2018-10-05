import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../login.service';

@Component({
  selector: 'app-form-validations',
  templateUrl: './form-validations.component.html',
  styleUrls: ['./form-validations.component.css']
})
export class FormValidationsComponent implements OnInit {
  userName:string;
  password:string;
  birthday:Date; // = new Date(1988, 3, 15); // April 15, 1988
  email:string;
  mouseOverLogin:boolean;
  constructor(private loginService:LoginService) { }

  login(formValues) {
    this.loginService.loginUser(formValues.userName, formValues.password)
    console.log(formValues);
  }
  
  onCancel(formValues) {
    this.userName = "";
    this.password = "";
  }
  ngOnInit() {
  }
}
