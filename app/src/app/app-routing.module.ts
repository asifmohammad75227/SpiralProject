import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AssignmentComponent } from './Task/assignment/assignment.component';
import { FinalComponent } from './Task/assignment/final/final.component';
import { QuestionComponent } from './Task/assignment/question/question.component';
import { StudentComponent } from './Task/assignment/student/student.component';
import { ViewComponent } from './Task/assignment/view/view.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "register",
        component: RegisterComponent,
      },
      {
        path: "teacher-view",
        component: TeacherViewComponent,
      },
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path:"assignment",
        component: AssignmentComponent,
      },
      {
        path:"view",
        component: ViewComponent,
      },
      {
        path:"question",
        component: QuestionComponent,
      },
      {
        path:"student",
        component: StudentComponent,
      },
      {
        path:"final",
        component: FinalComponent,
      },



      // {
      //   path: "student-view",
      //   component:
      // },



    ]},

      {
        path: "",
        redirectTo: "dashboard/login",
        pathMatch: 'full'
      }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {





 }
