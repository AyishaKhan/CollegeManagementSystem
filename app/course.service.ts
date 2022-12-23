import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }
  public courseRegisterService(course:any)
  {
return this.http.post("http://localhost:8089/api/course/register",course,{responseType:'text' as 'json'})
  }
  public getCourses()
  {
    return this.http.get("http://localhost:8089/api/course/getAllcourses");
  }

  public getCourseById(id:any)
  {
    return this.http.get("http://localhost:8089/api/course/getCourses/"+id);

  }
  public updateCourse(id:any)
{
  console.log("update course");
  return this.http.put("http://localhost:8089/api/course/updateCourse"+id,{responseType:'text' as 'json'});
}
  public deleteCourse(id:any)
  {
    return this.http.delete("http://localhost:8089/api/course/deleteCourse/"+id);
  }
}
