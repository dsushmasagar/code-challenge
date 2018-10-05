import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';

@Component({
  selector: 'app-reactive-form-validations',
  templateUrl: './reactive-form-validations.component.html',
  styleUrls: ['./reactive-form-validations.component.css']
})
export class ReactiveFormValidationsComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) { }
  profileForm:FormGroup;
  private firstName:FormControl;
  private lastName:FormControl;
  private isFirstNameRequired:FormControl;
  ngOnInit() {
    this.firstName = new FormControl("", Validators.required);
    this.lastName = new FormControl("", Validators.required);
    this.isFirstNameRequired = new FormControl(FindValueSubscriber);
    this.profileForm = new FormGroup({
      firstName:this.firstName,
      lastName:this.lastName,
      isFirstNameRequired:this.isFirstNameRequired

    }) 
    this.profileForm.get('isFirstNameRequired').valueChanges.subscribe(val => {
      if(val){
        this.profileForm.controls["firstName"].setValidators([Validators.required, Validators.minLength(8)]);
        this.profileForm.controls["firstName"].updateValueAndValidity();
      }
      else{
        this.profileForm.controls["firstName"].setValidators(Validators.required);
        this.profileForm.controls["firstName"].updateValueAndValidity();
      }
    })
  }
  
  login(formValues) {
    if(this.profileForm.valid){
      this.loginService.loginUser(formValues.firstName, formValues.lastName)
      console.log(formValues.firstName)
    }
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }
  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

}
