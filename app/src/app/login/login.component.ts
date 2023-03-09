import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { AssignmenytService } from '../Task/assignment/assignmenyt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userRole:any;
  constructor(private router:Router, private mainService:MainService,private ass:AssignmenytService) {
    // this.getUser();
  }


  ngOnInit(): void {
  }

  loginForm= new FormGroup({
    emailId:new FormControl(''),
   password: new FormControl('')
  })

  user:any;
  adminEmail:any;
   login(){
    this.mainService.HttpLogin(this.loginForm.value).subscribe(
      responce=>{
        console.log(responce);
this.mainService.email=this.loginForm.value.emailId;
this.ass.email=this.loginForm.value.emailId;
      console.log(this.mainService.email);

      this.router.navigateByUrl("/dashboard/teacher-view");
      // this.router.navigateByUrl("/dashboard/home");
        // this.mainService.getUserData().subscribe(res=>{
        //   this.user=res;
        //   console.log(res);
        //   console.log(this.user+" userdata")
        //   this.userRole=this.user.userRole.value;
        //   console.log(this.userRole+"userRole")
          // if(this.user.userRole=='master')
          // {
          //   this.mainService.masterEmail=this.user.emailId;
          //  this.router.navigateByUrl("/dashboard/teacher-view")

          // }

          // else

          // {
          //   this.mainService.studentEmail=this.user.emailId;
          //  this.router.navigateByUrl("/dashboard/studenet-view")

          // }




      //  this.adminEmail=this.user.emailId;
      //  localStorage.setItem('email',this.adminEmail);

        // if(responce!=null){
        //   alert("you are login successfully");

        // }
        // else {
        //   alert("Either password or username is wrong .Please Try again ")
        // }
      }
    )

   }


  //  getUser()
  //  {
  //   this.mainService.getUserData().subscribe(
  //     responce=>{
  //       console.log(responce);

  //     })


  //   }


  }





