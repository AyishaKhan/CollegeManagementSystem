import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
 // course Course =new Course(0,"","","","")
course:any;
  constructor(private courseService:CourseService,private route:Router) { }

  ngOnInit(): void {
    this.getCourseList();
  }

 
  
 private getCourseList()
{
  this.courseService.getCourses().subscribe(data => {
    this.course = data;
  });}

 updateCourse(courseId:number)
  {
    this.route.navigate(['/updateCourse',courseId]);
  }
deleteCourse(CourseId:number)
{

  this.courseService.deleteCourse(CourseId).subscribe(
    data=>{console.log("success"),
    this.getCourseList();
    alert("deleted successfully")},
    
    error=>console.log("error")
  )
  }
  addStaff(courseId:number)
  {
    this.route.navigate(['/staffRegister',courseId])
  }
  viewStaff(staffId:number)
  {
    this.route.navigate(['/stafflist',staffId])
  }
  
  logOut()
  {
    this.route.navigate(['/welcomepage'])
  }
  back()
  {
    this.route.navigate(['/adminhome'])
  }
  
  }
