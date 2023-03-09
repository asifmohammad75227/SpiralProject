import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AssignmenytService } from '../assignmenyt.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
assId:any;
  constructor(private service:AssignmenytService){

this.assId=this.service.assignmentId;
console.log(this.assId);
this.getQuestion();
  }


questionList:any;
  QuestionForm= new FormGroup({
    questionId:new FormControl(''),

    operation: new FormControl(''),
    number1: new FormControl(''),
    number2: new FormControl(''),
    result: new FormControl(''),
  })

  AddQuestion()
  {
this.service.AddQuestion(this.QuestionForm.value).subscribe(res=>{

  console.log(res);
  if(res)
  {
    alert("Question Added")
    this.QuestionForm.reset();


  }

})

  }


  getQuestion()
  {
    this.service.getQuestion().subscribe(res=>{
      console.log(res);
      this.questionList=res;
    })
  }
}
