import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {


  constructor(private httpClient:HttpClient) { }

  masterEmail:any
  studentEmail:any
  email:any;
  registerUser(register:any)

  {
    return this.httpClient.post<any>('http://localhost:9988/api/v1/user',register)

  }

  HttpLogin(data: any) {
    return this.httpClient.post("http://localhost:9988/api/v1/login", data);
  }


  getUserData(

  )
  {
    return this.httpClient.get("http://localhost:9988/api/v1/get-all-user/"+this.email);
  }



  addStudent()
  {

  }
}
