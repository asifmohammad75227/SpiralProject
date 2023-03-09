import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AssignmenytService } from '../assignmenyt.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent {
  AssignmentList: any = []
  studentList:any
  constructor(private service:AssignmenytService){

    this.getAssignment();
    this.getStudent();
  }


  getAssignment()
  {
    this.service.getAssignemntList().subscribe(res=>{


      console.log(res);
      this.AssignmentList=res;


    })
  }


  getStudent()
{
  this.service.getStudent1().subscribe(res=>{
    console.log("hello");
    console.log(res);
    this.studentList=res;
    console.log(this.studentList);


  })
}

studentForm= new FormGroup({
  emailId:new FormControl(''),
  assignmentId:new FormControl(''),
})
assignmentAdd()
{
this.addStudentt();



}

addStudentt(){

  // this.service.addAssignmentToStudent()

}


}
