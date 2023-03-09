import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';

import { HomeComponent } from './home/home.component';
import { AssignmentComponent } from './Task/assignment/assignment.component';
import { ViewComponent } from './Task/assignment/view/view.component';
import { QuestionComponent } from './Task/assignment/question/question.component';
import { StudentComponent } from './Task/assignment/student/student.component';
import { FinalComponent } from './Task/assignment/final/final.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    TeacherViewComponent,

    HomeComponent,
    AssignmentComponent,
    ViewComponent,
    QuestionComponent,
    StudentComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,MatSidenavModule,MatListModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,MatToolbarModule,MatIconModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
