import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StaffRegisterComponent } from './staff-register/staff-register.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { CourseRegisterComponent } from './course-register/course-register.component';
import { InternalmarksRegisterComponent } from './internalmarks-register/internalmarks-register.component';
import { CourseListComponent } from './course-list/course-list.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { InternalmarkListComponent } from './internalmark-list/internalmark-list.component';

const routes: Routes = [{ path: '', component:WelcomeComponent},
{ path: 'welcomepage', component:WelcomeComponent},
{ path: 'adminlogin', component: AdminLoginComponent},
{ path: 'adminregister', component: AdminRegisterComponent},
{ path: 'welcome', component: WelcomeComponent},
{ path: 'updatestudent/:studentId', component: UpdateStudentComponent},
{ path: 'studentregister/:staffId', component: StudentRegisterComponent},
{ path: 'stafflogin', component: StaffLoginComponent},
{ path: 'staffRegister/:courseId', component: StaffRegisterComponent},
{ path: 'adminhome', component: AdminHomeComponent},
{ path: 'stafflist/:studentId', component: StaffListComponent},
{ path: 'courseregister', component: CourseRegisterComponent},
{ path: 'internalmarksregister/:id', component: InternalmarksRegisterComponent},
{ path: 'aboutus', component: AboutUsComponent},
{ path: 'contact', component: ContactUsComponent},
{path:'regiterStaff/:courseId',component:StaffRegisterComponent},
{path:'courselist',component:CourseListComponent},
{path:'stafflist/:courseId',component:StaffListComponent},
{path:'studentlist/:staffId',component:StudentListComponent},
{path:'stafflistinter',component:StaffListComponent},
{path:'internalmarklist/:internalmarksId',component:InternalmarkListComponent},
  {path:"",redirectTo:"/register", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
