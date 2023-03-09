import { Component } from '@angular/core';
import { AssignmenytService } from '../assignmenyt.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  AssignmentList: any = []

  constructor(private service:AssignmenytService){

    this.getAssignment();
  }


  getAssignment()
  {
    this.service.getAssignemntList().subscribe(res=>{


      console.log(res);
      this.AssignmentList=res;


    })
  }

  AddQuestion(data:any)
  {
  localStorage.setItem('assignmentId',data)
      this.service.particularMovieData(data);
    }
  }

