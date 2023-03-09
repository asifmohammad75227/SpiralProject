import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
rolluser:any;
rolluser1:any;

  constructor(private mainService:MainService){
    this.getUser();

    }


getUser()
{
  this.mainService.getUserData().subscribe(
    responce=>{

console.log(responce);
this.rolluser=responce;
this.rolluser1=this.rolluser.value

})

}

}
