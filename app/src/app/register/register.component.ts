import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private mainService:MainService,private router:Router) { }
  RegistrationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    emailId: new FormControl('', [Validators.required,]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
    confirmPassword: new FormControl('', Validators.required),
    rollUser: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern("[789]\\d{9}")])
  });
  get getname() { return this.RegistrationForm.controls['name']; }
  get getemailId() { return this.RegistrationForm.controls['emailId']; }
  get getPassword() { return this.RegistrationForm.controls['password']; }
  get getConfirmPassword() { return this.RegistrationForm.controls['confirmPassword']; }
  get getPhoneNumber() { return this.RegistrationForm.controls['phoneNumber']; }
  get getrollUser() { return this.RegistrationForm.controls['rollUser']; }


  OnRegister(){

    console.table(this.RegistrationForm.value);
    if (this.getPassword.value != this.getConfirmPassword.value) {
      // alert("Your password confirm password should match");
      // this.snack.open("Your password & confirm password should match","close");
      alert("password should be match")
    }
    else {
      this.mainService.registerUser(this.RegistrationForm.value).subscribe(res=>{
        console.log(res);
        // alert("Account Created Sucessfully")
        // this.snack.open("Account Created Sucessfully","close");

        this.router.navigate(["/dashboard/login"]);

      },err=>
      {
        alert("emailId is already exists")
      }
      )

    }
    this.RegistrationForm.reset();

  }

}
