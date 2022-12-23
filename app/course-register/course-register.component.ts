import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-register',
  templateUrl: './course-register.component.html',
  styleUrls: ['./course-register.component.css']
})
export class CourseRegisterComponent implements OnInit {
  course: Course = new Course(0,"","","","");
message:any;
  constructor(private courseService:CourseService,private router:Router) { }

  ngOnInit(): void {
   
  }
  public courseRegister(){
     this.courseService.courseRegisterService(this.course).subscribe(
      data =>{console.log("Login Success"),
    this.router.navigate(['/courselist'])},
      error =>{console.log("Login Failed"),
    this.message="login failed. try again"})
    }
    back()
    {
      this.router.navigate(['/welcomepage'])
    }
}
