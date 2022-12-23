import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StaffRegisterComponent } from './staff-register/staff-register.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { CourseRegisterComponent } from './course-register/course-register.component';
import { InternalmarksRegisterComponent } from './internalmarks-register/internalmarks-register.component';
import { CourseListComponent } from './course-list/course-list.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { InternalmarkListComponent } from './internalmark-list/internalmark-list.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
      AdminLoginComponent,
      AdminHomeComponent,
      StudentHomeComponent,
      AdminRegisterComponent,
      StaffLoginComponent,
      StaffRegisterComponent,
      StudentRegisterComponent,
      CourseRegisterComponent,
      InternalmarksRegisterComponent,
      ContactUsComponent,
      AboutUsComponent,
      CourseListComponent,
      StaffListComponent,
      StudentListComponent,
      UpdateStudentComponent,
      InternalmarkListComponent,
      
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
