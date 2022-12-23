import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit{
  staff:any;
student: any;
  constructor(private staffService:StaffService,private route:Router) { }

  ngOnInit(): void {
    this.getStaffList();
  }

 
  
 private getStaffList()
{
  this.staffService.getAllStaffs().subscribe(data => {
    this.staff = data;
  });}

 
deleteStaff(staffId:number)
{

  this.staffService.deleteStaff(staffId).subscribe(
    data=>{console.log("success"),
    this.getStaffList();
    alert("deleted successfully")},
    
    error=>console.log("error")
  )
  }
  addStudent(staffId:number)
  {
    this.route.navigate(['/studentregister',staffId])
  }
  
  viewStudent(id:number)
  {
    this.route.navigate(['/studentlist',id])
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
