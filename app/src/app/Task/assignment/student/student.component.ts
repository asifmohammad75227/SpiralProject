import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AssignmenytService } from '../assignmenyt.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  studentList:any;

  constructor(private service:AssignmenytService) {

  this.getAssignment();
  this.getStudent();

  // this.getStudent1();

}



// getStudent1()
// {
//   this.service.getStudent1().subscribe(res=>{
//     console.log("hello");
//     console.log(res);
//     this.studentList=res;
//     console.log(this.studentList);


//   })
// }

// addStudent(data:any)

// {
// console.log(data);


// }




// studentForm= new FormGroup({
//   emailId:new FormControl(''),

// })

// add()
// {
// this.service.AddStudent(this.studentForm.value).subscribe(res=>{
//   console.log(res);


// })
// }


//



AssignmentList: any = []
studentList1:any





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
emailId:any;

studentForm1= new FormGroup({
emailId:new FormControl(''),
assignmentId:new FormControl(''),
})
assignmentAdd()
{
this.addStudentt();

this.assignmentAddtoStudent();

}

assignmentId:any;
addStudentt(){

// this.service.addAssignmentToStudent()
{
  this.service.AddStudent(this.studentForm1.value).subscribe(res=>{
    console.log("chala")
    console.log(res);
    this.emailId=this.studentForm1.value.emailId;
    console.log(this.emailId+"  eeee");
    this.assignmentId=this.studentForm1.value.assignmentId;
    console.log(this.assignmentId+"  heeee");


  })
  }


}

assignmentAddtoStudent()
{
  console.log("calling");
this.service.addAssignmentToStudent(this.emailId,this.assignmentId).subscribe(res=>{

  console.log(res);
  if(res)
  {
    alert("student and assignment added");
  }
})

}


}
