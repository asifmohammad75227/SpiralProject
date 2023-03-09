import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AssignmenytService {
email:any;
  constructor(private httpClient:HttpClient,private router:Router) { }
  assignmentId:any

  AddAssignment(assignment:any)
    {
      return this.httpClient.post("http://localhost:9988/api/v2/addAssignment/"+this.email,assignment);
    }


    getAssignemntList()
    {
      return this.httpClient.get("http://localhost:9988/api/v2/get/"+this.email);
    }

    AddQuestion(assignment:any)
    {
      return this.httpClient.post("http://localhost:9988/api/v2/addQuestion/"+this.email+"/"+localStorage.getItem('assignmentId'),assignment);
    }


    particularMovieData(data: any) {
      this.assignmentId = data;
      this.router.navigate(['/dashboard/question']);
      }

      getQuestion()
      {
        return this.httpClient.get("http://localhost:9988/api/v2/getQuestion/"+this.email+"/"+localStorage.getItem('assignmentId'));
      }

      getStudent1()
      {
        console.log("hello");
        return this.httpClient.get("http://localhost:9988/api/v1/get-student");
      }


      AddStudent(data:any)
      {

        return this.httpClient.post("http://localhost:9988/api/v2/addStudent/"+this.email,data);
      }


      addAssignmentToStudent(data:any,data1:any)
      {

        return this.httpClient.post("http://localhost:9988/api/v2/addAssignmentToStudent/"+"/"+this.email+"/"+data,data1);
      }
  }

   //   http://localhost:9988/api/v1/get-student
    //  http://localhost:9988/api/v2/addQuestion

  //  http://localhost:9988/api/v2/getQuestion  get question


  // http://localhost:9988/api/v2/get

 // add assignment:- http://localhost:9988/api/v2/addAssignment/asif8@gmail.com

    //  http://localhost:9988/api/v2/addStudent

    //   //  http://localhost:9988/api/v2/addAssignmentToStudent
