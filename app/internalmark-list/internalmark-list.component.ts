import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InternalMarksService } from '../internalmarks.service';
@Component({
  selector: 'app-internalmark-list',
  templateUrl: './internalmark-list.component.html',
  styleUrls: ['./internalmark-list.component.css']
})
export class InternalmarkListComponent implements OnInit {
  internalmarks:any;
  constructor(private internalmarksService:InternalMarksService,private route:Router) { }

  ngOnInit(): void {
    this.getInternalmarkList();
  }

 
  
 private getInternalmarkList()
{
  this.internalmarksService.getInternalMarks().subscribe(data => {
    this.internalmarks = data;
  });}

 updateStudentMark(internalmarksId:number)
  {
    this.route.navigate(['/updatestudent',internalmarksId]);
  }

  logOut()
  {
    this.route.navigate(['/welcomepage'])
  }
  back()
  {

  }

  viewStudentInternal(internalmarksId:number)
  {
    this.route.navigate(['/internalmarklist',internalmarksId])
  }
}
