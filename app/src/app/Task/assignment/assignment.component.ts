import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AssignmenytService } from './assignmenyt.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
constructor(private service:AssignmenytService,private router:Router){}


  assignmentForm= new FormGroup({
    assignmentId:new FormControl(''),
    assignmentName: new FormControl('')
  })

  add()

  {
    this.service.AddAssignment(this.assignmentForm.value).subscribe(res=>{
console.log(res);
this.router.navigateByUrl("/dashboard/teacher-view");

    })



  }
}
